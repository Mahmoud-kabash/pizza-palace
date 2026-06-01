import { useState } from 'react';

const pizzaData = [
  { id: 1, name: 'Margherita', category: 'classic', small: 6, medium: 9, large: 12 },
  { id: 2, name: 'Pepperoni', category: 'meat', small: 7, medium: 10, large: 13 },
  { id: 3, name: 'Veggie Supreme', category: 'vegetarian', small: 7, medium: 10, large: 13 },
  { id: 4, name: 'Chicken BBQ', category: 'meat', small: 8, medium: 11, large: 15 },
];

const dessertData = [
  { id: 1, name: 'Chocolate Cake', category: 'cake', small: 4, medium: 6, large: 9 },
  { id: 2, name: 'Cheesecake', category: 'cake', small: 4, medium: 6, large: 9 },
  { id: 3, name: 'Tiramisu', category: 'cake', small: 5, medium: 7, large: 10 },
  { id: 4, name: 'Vanilla Ice Cream', category: 'icecream', small: 3, medium: 5, large: 7 },
  { id: 5, name: 'Chocolate Ice Cream', category: 'icecream', small: 3, medium: 5, large: 7 },
  { id: 6, name: 'Strawberry Ice Cream', category: 'icecream', small: 3, medium: 5, large: 7 },
];

const drinkData = [
  { id: 1, name: 'Cola', category: 'softdrink', small: 2, medium: 3, large: 4 },
  { id: 2, name: 'Lemonade', category: 'softdrink', small: 2, medium: 3, large: 4 },
  { id: 3, name: 'Orange Juice', category: 'fruitjuice', small: 3, medium: 4, large: 5 },
  { id: 4, name: 'Mango Juice', category: 'fruitjuice', small: 3, medium: 4, large: 5 },
  { id: 5, name: 'Still Water', category: 'water', small: 1, medium: 2, large: 3 },
  { id: 6, name: 'Sparkling Water', category: 'water', small: 1, medium: 2, large: 3 },
];

export default function Menu() {
  const [pizzaFilter, setPizzaFilter] = useState('all');
  const [dessertFilter, setDessertFilter] = useState('all');
  const [drinkFilter, setDrinkFilter] = useState('all');

  const filteredPizzas = pizzaFilter === 'all'
    ? pizzaData
    : pizzaData.filter((item) => item.category === pizzaFilter);

  const filteredDesserts = dessertFilter === 'all'
    ? dessertData
    : dessertData.filter((item) => item.category === dessertFilter);

  const filteredDrinks = drinkFilter === 'all'
    ? drinkData
    : drinkData.filter((item) => item.category === drinkFilter);

  return (
    <div className="container section">
      <h1 className="page-title">Our Menu</h1>
      <p className="lead center-text">Explore our pizza sizes, prices, drinks, and desserts.</p>

      <section className="section">
        <h2 className="section-title">Pizza Price Table</h2>

        <div className="filter-buttons">
          <button className={pizzaFilter === 'all' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setPizzaFilter('all')}>All</button>
          <button className={pizzaFilter === 'classic' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setPizzaFilter('classic')}>Classic</button>
          <button className={pizzaFilter === 'meat' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setPizzaFilter('meat')}>Meat</button>
          <button className={pizzaFilter === 'vegetarian' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setPizzaFilter('vegetarian')}>Vegetarian</button>
        </div>

        <div className="table-wrapper">
          <table>
            <caption>Pizza Palace Menu Prices</caption>
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
              </tr>
            </thead>
            <tbody>
              {filteredPizzas.map((pizza) => (
                <tr key={pizza.id}>
                  <td>{pizza.name}</td>
                  <td>${pizza.small}</td>
                  <td>${pizza.medium}</td>
                  <td>${pizza.large}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Desserts Price Table</h2>

        <div className="filter-buttons">
          <button className={dessertFilter === 'all' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setDessertFilter('all')}>All</button>
          <button className={dessertFilter === 'cake' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setDessertFilter('cake')}>Cake</button>
          <button className={dessertFilter === 'icecream' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setDessertFilter('icecream')}>Ice Cream</button>
        </div>

        <div className="table-wrapper">
          <table>
            <caption>Pizza Palace Desserts Prices</caption>
            <thead>
              <tr>
                <th>Dessert</th>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
              </tr>
            </thead>
            <tbody>
              {filteredDesserts.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.small}</td>
                  <td>${item.medium}</td>
                  <td>${item.large}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Drinks Price Table</h2>

        <div className="filter-buttons">
          <button className={drinkFilter === 'all' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setDrinkFilter('all')}>All</button>
          <button className={drinkFilter === 'softdrink' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setDrinkFilter('softdrink')}>Soft Drinks</button>
          <button className={drinkFilter === 'fruitjuice' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setDrinkFilter('fruitjuice')}>Fruit Juice</button>
          <button className={drinkFilter === 'water' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setDrinkFilter('water')}>Water</button>
        </div>

        <div className="table-wrapper">
          <table>
            <caption>Pizza Palace Drinks Prices</caption>
            <thead>
              <tr>
                <th>Drink</th>
                <th>Small</th>
                <th>Medium</th>
                <th>Large</th>
              </tr>
            </thead>
            <tbody>
              {filteredDrinks.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.small}</td>
                  <td>${item.medium}</td>
                  <td>${item.large}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
