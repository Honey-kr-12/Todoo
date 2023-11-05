import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  };

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function clearListItems(){
    const confirm = window.confirm("do you want to delete all??");
    if(confirm) setItems([]);
  }

  return <div className="app">
    < Logo />
    < Form onAddButton={handleAddItems} onClickCross={handleDeleteItem} />
    < PackingList clearListItems={clearListItems} onToggle={handleToggleItem} items={items} handleDeleteItem={handleDeleteItem} />
    < Stats items={items} />
  </div>

}