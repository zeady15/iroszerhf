import React, { useState, useEffect } from 'react';

function ItemDetails({ id = '1' }) { 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(`https://iroszer.sulla.hu/items/${id}`);
      const data = await response.json();
      const fetchedItem = data.item || data;
      setItem(fetchedItem);
      setLoading(false);
    }
    fetchItem();
  }, [id]);

  if (loading) return <p>Betöltés</p>;
  if (!item) return <p>Nem található</p>;

  return (
    <div>
      <h2>Item részletek: {id}</h2>
      <p>Név: {item.name}</p>
      <p>Ár: {item.price} Ft</p>
    </div>
  );
}

export default ItemDetails;