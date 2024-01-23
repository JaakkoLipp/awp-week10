import MyList from "./MyList";
import React, { useState } from "react";

function MyContainer() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", clicked: false },
    { id: 2, text: "Learn JSX", clicked: false },
    { id: 3, text: "Learn CSS", clicked: false },
  ]);

  const toggleComplete = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, clicked: !item.clicked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const [newItemText, setNewItemText] = useState("");
  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      text: newItemText,
      clicked: false,
    };

    setItems([...items, newItem]);
    setNewItemText("");
  };

  return (
    <div>
      <MyList toggleComplete={toggleComplete} header={"Header"} items={items} />
      <textarea
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default MyContainer;
