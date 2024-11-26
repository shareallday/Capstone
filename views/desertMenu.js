import html from "html-literal";
import puffPic from "../assets/img/puff.jpg";
import beignetsPic from "../assets/img/beignets.jpg";
import custardPic from "../assets/img/custard.jpg";

export default () => html`
  <main class="home-main">
    <section class="hero">
      <h1>Welcome to Nigerian Suya Hub!</h1>
      <p class="hero-text">
       <h1>DESERT MENU</h1>
      </p>
    </section>


    <section class="menu-categories" id="beer">
      <h2>SWEET DONUT PUFF PUFF</h2>
      <img src="${puffPic}" alt="puff" />
      <div class="category-grid">
        <div class="category-card">


    <section class="menu-categories" id="deserts">
      <h2>AFRICAN BEIGNETS</h2>
      <img src="${beignetsPic}" alt="beignets" />


      <section class="menu-categories" id="moon-pies">
      <h2>CUSTARD MOON PIES</h2>
      <img src="${custardPic}" alt="pies" />

      `;
