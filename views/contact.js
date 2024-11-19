import html from "html-literal";

export default () => html`
  <main class="contact-main">
    <section class="contact-content">
      <h1>Contact Us</h1>
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions or feedback? We'd love to hear from you!</p>
          <ul class="contact-details">
            <li>Email: support@dinedash.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Hours: Monday-Friday, 9am-5pm</li>
          </ul>
        </div>
        <div class="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </main>
`;
