import html from "html-literal";
import navItem from "./navItem.js";

export default navItems => html`
  <nav class="main-nav">
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${navItems.map(item => navItem(item)).join("")}
    </ul>
  </nav>
`;
