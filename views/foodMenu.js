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
      <section class="about-content">
      <!-- <div class="about-text"> -->
        <p>
        A deliciously savory steamed bean pudding made from blended
        black-eyed peas, peppers, onions, and spices, offering a perfect combination
        of texture and flavor, served with your choice of protein.
        </p>
      <img src="${moiPic}" alt="moiMoi" />
      <select id="protein" name="protein">
          <option value="egg-moiMoi $6.00"> Egg MoiMoi $6.00</option>
          <option value="chicken-moiMoi $7.00">Chicken MoiMoi $7.00</option>
          <option value="goat-moiMoi $8.00">Goat MoiMoi $8.00</option>
        </select>
      <div class="category-grid">
        <div class="category-card">


    <section class="menu-categories" id="rice-entrees">
      <h2>RICE & MAIN COURSES</h2>
      <h2>JOLLOF RICE</h2>
      <p>
        A flavorful, one-pot West African dish featuring
        tender rice cooked in a rich,spiced tomato sauce with aromatic herbs,
        served with your choice of protein and fried plantains.
        </p>
      <img src="${jollofPic}" alt="jollofRice" />
      <select id="jollof" name="jollof">
          <option value="egg-jollofRice $6.00">Egg & Jollof Rice $6.00</option>
          <option value="chicken-jollofRice $7.00">Chicken & Jollof Rice $7.00</option>
          <option value="goat-jollofRice $8.00">Goat & Jollof Rice $8.00</option>
        </select>
      <h2>GRILLED FISH</h2>
      <p>
      A perfectly seasoned and expertly grilled fish of your choice, served with a crispy
      exterior and tender, juicy flesh, accompanied by a side of plantain
      and salad.
        </p>
      <img src="${fishPic}" alt="fish" />
      <select id="jollof" name="jollof">
          <option value="Croaker $7.00">Croaker $7.00</option>
          <option value="Tilapia $9.00">Tilapia $9.00</option>
          <option value="Snapper $12.00">Snapper $12.00</option>
        </select>

`;
