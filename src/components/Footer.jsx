export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">

        <div className="footer-brand">
          <span className="footer-logo">🍕 Pizza Palace</span>
          <p>Fresh taste, warm service, every day.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Main Street, Beirut, Lebanon</p>
          <p>📞 +961 70 123 456</p>
          <p>✉️ info@pizzapalace.com</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
           <span><i className="bi bi-facebook"></i> Facebook</span>
           <span><i className="bi bi-instagram"></i> Instagram</span>
           <span><i className="bi bi-tiktok"></i> TikTok</span>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 Pizza Palace. All Rights Reserved.</p>
      </div>
    </footer>
  );
}