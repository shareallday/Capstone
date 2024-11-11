import html from "html-literal";
import logo from "../assets/img/DineDashlogo.jpg";

export default () => html`
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Contact Us</h4>
        <p>Email: support@dinedash.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
      <div class="footer-section">
        <h4>Powered By</h4>
        <img src="${logo}" alt="DineDash Logo" class="logo" />
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 DineDash. All rights reserved.</p>
    </div>
  </footer>
`;
