import React, { useState } from 'react';

function NewItem() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://iroszer.sulla.hu/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name, price: parseInt(price) }),
      });
      if (response.ok) {
        setMessage('Sikeres hozzáadás!');
        setId('');
        setName('');
        setPrice('');
      } else {
        setMessage('Hiba történt');
      }
    } catch (error) {
      setMessage('Hiba: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Új irodaszer hozzáadása</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID (tetszőleges szöveges):
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </label>
        <br />
        <label>
          Név:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Ár (szám):
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Hozzáadás</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default NewItem;