import { Router } from "express";
import Contact from "../models/Contact.js";

const router = Router();

// Create contact route - http://localhost:4040/contacts/
router.post("/", async (request, response) => {
  try {
    const newContact = new Contact(request.body);

    const data = await newContact.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all contacts route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Contact.find(query); // {"crust": "chicago"}

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single contact by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Contact.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a contact by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Contact.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single contact by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Contact.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          crust: body.crust,
          cheese: body.cheese,
          sauce: body.sauce,
          toppings: body.toppings
        }
      },
      {
        new: true,
        runValidators: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
export default router;
