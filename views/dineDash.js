import html from "html-literal";

export default () => html`
  <main class="dineDash-main">
    <section class="dineDash-content">
      <h1>Contact Us</h1>
      <div class="app-container">
        <div class="blur-background"></div>
        <div class="content">
          <div class="logo">DineDash</div>
          <div class="steps">
            <h2 class="step">SCAN.</h2>
            <h2 class="step">ORDER.</h2>
            <h2 class="step">ENJOY.</h2>
          </div>
          <p class="subtitle">Scan the menu. Skip the line.</p>
          <button class="cta-button" id="getStartedBtn">Get Started</button>
        </div>
      </div>
      <script src="app.js"></script>
    </section>
  </main>
`;
