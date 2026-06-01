export default function Home({ setCurrentPage }) {
 const pizzas = [
  { id: 1, name: 'Margherita', description: 'Classic tomato sauce, mozzarella cheese, and fresh basil.', img: '/margherita.jpg' },
  { id: 2, name: 'Pepperoni', description: 'A favorite pizza loaded with spicy pepperoni and extra cheese.', img: '/pepperoni.jpg' },
  { id: 3, name: 'Veggie Supreme', description: 'Mushrooms, olives, onions, peppers, and a delicious tomato base.', img: '/veggie.png' },
];

  const features = [
    { id: 1, title: 'Fresh Ingredients', text: 'We use fresh vegetables, premium cheese, and hand-prepared dough every day.' },
    { id: 2, title: 'Fast Delivery', text: 'Our team prepares and delivers your order quickly while keeping it hot and tasty.' },
    { id: 3, title: 'Family Friendly', text: 'Enjoy a warm atmosphere for friends, families, students, and pizza fans.' },
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Fresh • Hot • Delivered Fast</p>
            <h1>Delicious Pizza Made with Love</h1>
            <p className="lead">
              Welcome to Pizza Palace, your neighborhood pizza restaurant. We serve fresh dough,
              rich sauce, premium cheese, and unforgettable flavors for every pizza lover.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setCurrentPage('menu')}>View Menu</button>
              <button className="btn btn-secondary" onClick={() => setCurrentPage('contact')}>Order now</button>
            </div>
          </div>
          <div className="hero-card">
             <img src="/pizza.jpg" alt="Pizza illustration" />
        </div>
        </div>
      </section>

      <section className="offer section">
        <div className="container offer-box">
          <div>
            <h2>Special Offer</h2>
            <p><strong>Buy 2 large pizzas and get 1 soft drink free.</strong> Available every Friday and Saturday.</p>
          </div>
          <button className="btn btn-light" onClick={() => setCurrentPage('contact')}>Order / Reserve</button>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Popular Pizzas</h2>
        <div className="pizza-grid">
          {pizzas.map((pizza) => (
           <article key={pizza.id} className="pizza-card">
              <img src={pizza.img} alt={pizza.name} />
              <h3>{pizza.name}</h3>
              <p>{pizza.description}</p>
           </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Why Choose Pizza Palace?</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.id} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}