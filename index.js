import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";


const router = new Navigo("/");

function render(state = store.home) {
  // console.log(state.header);
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.links)}
      ${main(state)}
      ${footer()}
    `;
}

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";



    switch (view) {
      case "about":
        axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis&units=imperial`).then(response => {
          console.log("Weather Response Data", response.data);

          store.about.weather = {
            city: response.data.name,
            temp: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].main
          };
          done();
        })
          .catch((err) => {
            console.log(err);
            done();
          });
        break
      // Added in Lesson 7.1
      //   case: "about":
      //     axios
      //       .get(`${process.env.DINEDASH_API_URL = http://localhost:4040`)
      // .then(response => {
      //         store.pizza.pizzas = response.data;
      //         done();
      //       })
      //       .catch((error) => {
      //         console.log(response, response);
      //         done();
      //       });
      //     break;
      default:
        done();
    }
  },
  already: (params) => {
    const view = params?.data?.view ? camelCase(params.data.view) : "home";

    render(store[view]);
  },

  after: match => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });

    if (view === "contact") {
      // Add an event handler for the submit button on the form
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();

        // Get the form element
        const inputList = event.target.elements;
        console.log("Input Element List", inputList);

        // Create a request body object to send to the API
        const requestData = {
          name: inputList.name.value,
          email: inputList.email.value,
          message: inputList.message.value,
        };
        // Log the request body to the console
        console.log("request Body", requestData);

        axios
          // Make a POST request to the API to create a new pizza
          .post(`${process.env.DINEDASH_API_URL}/contacts`, requestData)
          .then(response => {
            //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
            store.contact.contacts.push(response.data);
            router.navigate("/home");
          })
          // If there is an error log it to the console
          .catch(error => {
            console.log("It puked", error);
          });
      });
    }
  }
});

router.on({
  "/": () => render(),

  ":view": match => {

    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view in store) {
      render(store[view]);


    } else {
      render(store.viewNotFound);
      console.log(`View Not Found ${view}`);
    }
  }
})
  .resolve();
