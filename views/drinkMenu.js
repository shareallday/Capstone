import html from "html-literal";
import teaPic from "../assets/img/tea.jpg";
import lemonadePic from "../assets/img/lemonade.jpg";
import beerPic from "../assets/img/beer.jpg";

export default () => html`
  <main class="home-main">
    <section class="hero">
      <h1>Welcome to Nigerian Suya Hub!</h1>
      <p class="hero-text">
       <h1>DRINK MENU</h1>
      </p>
    </section>


    <section class="menu-categories" id="beer">
      <h2>BEER</h2>
      <p>
      Our beer selection features a carefully curated mix of local craft brews, crisp lagers,
      hoppy IPAs, and rich stouts, offering something for every palate.
        </p>
      <img src="${beerPic}" alt="beer" />
      <select id="drink" name="drink">
          <option value="star-lager $6.00">Star Lager $2.50</option>
          <option value="gulder $7.00">Gulder $3.00</option>
          <option value="amstel-malta $8.00">Amstel Malta $3.75</option>
          <option value="shandy-club $8.00">Shandy Club $4.00</option>
        </select>
      <div class="category-grid">
        <div class="category-card">


    <section class="menu-categories" id="drinks">
      <h2>LEMONADE</h2>
      <p>
      Our lemonade is a refreshing blend of freshly squeezed lemons, a hint
      of sweetness, and a touch of citrus zest, perfect for a cool, tangy drink.
        </p>
      <img src="${lemonadePic}" alt="lemonade" />
      <select id="flavor" name="flavor">
          <option value="lemonade $2.00">Lemonade $2.00</option>
          <option value="pink-lemonade $3.00">Pink Lemonade $3.00</option>
          <option value="strawberry-lemonade $3.00">Strawberry Lemonade $3.00</option>
        </select>


      <section class="menu-categories" id="tea-drinks">
      <h2>TEA</h2>
      <p>
      Our selection of teas offers a variety of flavors, from soothing
      herbal blends to bold black teas, each brewed to perfection for a
      calming and aromatic experience.
        </p>
      <img src="${teaPic}" alt="tea" />
      <select id="flavors" name="flavors">
          <option value="sweet-tea $2.00">Sweet Tea $2.00</option>
          <option value="green-tea $3.00">Green Tea $3.00</option>
          <option value="ginger-tea $3.00">Ginger Tea $3.00</option>
        </select>
      `;
