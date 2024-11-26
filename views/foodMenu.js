import html from "html-literal";
import jollofPic from "../assets/img/jollof.jpg";
import moiPic from "../assets/img/moi.jpg";
import fishPic from "../assets/img/fish.jpg";

export default () => html`
  <main class="home-main">
    <section class="hero">
      <h1>Welcome to Nigerian Suya Hub!</h1>
      <p class="hero-text">
       <h1>APPETIZERS</h1>
      </p>
    </section>


    <section class="menu-categories" id="apps">
      <h2>MOI MOI</h2>
      <img src="${moiPic}" alt="moiMoi" />
      <div class="category-grid">
        <div class="category-card">


    <section class="menu-categories" id="rice-entrees">
      <h2>RICE & MAIN COURSES</h2>
      <h2>JOLLOF RICE</h2>
      <img src="${jollofPic}" alt="jollofRice" />
      <h2>GRILLED FISH</h2>
      <img src="${fishPic}" alt="fish" />

`;
