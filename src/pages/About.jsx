const features = [
  { id: 1, title: 'Handmade Dough', text: 'Prepared fresh every day for better taste and texture.' },
  { id: 2, title: 'Clean Environment', text: 'We focus on hygiene, quality service, and customer satisfaction.' },
  { id: 3, title: 'Friendly Team', text: 'Our staff is always ready to help you choose the perfect meal.' },
];

const hours = [
  { id: 1, day: 'Monday - Thursday', open: '10:00 AM', close: '10:00 PM' },
  { id: 2, day: 'Friday', open: '10:00 AM', close: '11:00 PM' },
  { id: 3, day: 'Saturday', open: '11:00 AM', close: '11:00 PM' },
  { id: 4, day: 'Sunday', open: '12:00 PM', close: '09:00 PM' },
];

export default function About() {
  return (
    <div className="container section">
      <h1 className="page-title">About Pizza Palace</h1>

      <div className="about-layout">
        <section className="card">
          <h2>Our Story</h2>
          <p>
            Pizza Palace started with a simple idea: serve fresh and flavorful pizza in a comfortable place.
            We combine traditional recipes with modern presentation to create a memorable dining experience.
          </p>
        </section>
       <section className="card">
           <h2>Our Mission</h2>
           <p>
              Our mission is to deliver quality food, quick service, and a welcoming atmosphere for every customer.
              We believe every meal should be a great experience, made with care and served with a smile.
           </p>
           </section>
      </div>

      <section className="section">
        <h2 className="section-title">Why Customers Love Us</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.id} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Opening Hours</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Opening Time</th>
                <th>Closing Time</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour.id}>
                  <td>{hour.day}</td>
                  <td>{hour.open}</td>
                  <td>{hour.close}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}