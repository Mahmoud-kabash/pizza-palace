export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <a className="logo" onClick={() => setCurrentPage('home')}>
          <span className="logo-mark">🍕</span>
          <span>Pizza Palace</span>
        </a>
        <nav className="navbar">
          <a onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a>
          <a onClick={() => setCurrentPage('menu')} className={currentPage === 'menu' ? 'active' : ''}>Menu</a>
          <a onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'active' : ''}>About</a>
          <a onClick={() => setCurrentPage('Order')} className={currentPage === 'contact' ? 'active' : ''}>Order</a>
        </nav>
      </div>
    </header>
  );
}