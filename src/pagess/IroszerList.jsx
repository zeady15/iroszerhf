import React, { useState, useEffect } from 'react';

function ItemsList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('https://iroszer.sulla.hu/items');
      const data = await response.json();
      let fetchedItems = data.data || data;
      if (!Array.isArray(fetchedItems)) {
        fetchedItems = Object.values(fetchedItems);
      }
      setItems(fetchedItems);
      setLoading(false);
    }
    fetchItems();
  }, []);

  if (loading) return <p>Betöltés</p>;

  return (
    <div>
      <h2>Irodaszerek listája</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Ár</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price} Ft</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsList;