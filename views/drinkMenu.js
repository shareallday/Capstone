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
      <img src="${beerPic}" alt="beer" />
      <div class="category-grid">
        <div class="category-card">


    <section class="menu-categories" id="drinks">
      <h2>PINK LEMONADE, STRAWBERRY LEMONADE, LEMONADE</h2>
      <img src="${lemonadePic}" alt="lemonade" />


      <section class="menu-categories" id="tea-drinks">
      <h2>SWEET TEA, GREEN TEA, LEMON WATER</h2>
      <img src="${teaPic}" alt="tea" />

      `;
