import html from "html-literal";

export default () => html`
  <main class="home-main">
    <section class="hero">
      <h1>Welcome to Nigerian Suya!</h1>
      <p class="hero-text">
        Explore our menu and order directly from your table.
      </p>
      <button class="cta-button">Get Started</button>
    </section>

    <section class="menu-categories">
      <h2>Our Menu</h2>
      <div class="category-grid">
        <div class="category-card">
          <img src="images/appetizers.jpg" alt="Appetizers" />
          <h3>Appetizers</h3>
        </div>
        <div class="category-card">
          <img src="images/main-dishes.jpg" alt="Main Dishes" />
          <h3>Main Dishes</h3>
        </div>
        <div class="category-card">
          <img src="images/desserts.jpg" alt="Desserts" />
          <h3>Desserts</h3>
        </div>
        <div class="category-card">
          <img src="images/drinks.jpg" alt="Drinks" />
          <h3>Drinks</h3>
        </div>
      </div>
    </section>
  </main>
`;
