import html from "html-literal";

export default () => html`
  <main class="home-main">
    <section class="hero">
      <h1>Welcome to Nigerian Suya Hub!</h1>
      <p class="hero-text">
       <h3>TABLE 3</h3>
      </p>
    </section>

    <section class="menu-categories">
      <h2>Our Menu</h2>
      <div class="category-grid">
        <div class="category-card">
        <button class="cta-button">Food Menu</button>
          <!-- <img src="images/ice.jpg\\" alt="Appetizers" /> -->
          <!-- <h3>Appetizers</h3> -->
        </div>

        <div class="category-card">

          <!-- <img src="images/main-dishes.jpg" alt="Main Dishes" /> -->


          <h3></h3>
          <button class="cta-button">Drink Menu</button>
        </div>

        <div class="category-card">
        <!-- <button class="cta-button">Main Dishes</button> -->
          <!-- <img src="images/desserts.jpg" alt="Desserts" /> -->



          <h3></h3>
          <button class="cta-button">Desert Menu</button>
        </div>
        <div class="category-card">
          <!-- <img src="images/drinks.jpg" alt="Drinks" /> -->
          <!-- <h3>Drinks</h3> -->
        </div>
      </div>
    </section>
  </main>
`;
