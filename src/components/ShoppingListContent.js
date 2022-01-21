import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home } from "./HomeContent";
import AddForm from "./AddForm";
import ItemList from "./ItemList";

export function ShoppingList() {
  //toggle form
  const [showForm, setshowForm] = useState(false);
  const [progress, setProgress] = useState("all");
  const [filterBought, setFilterBought] = useState([]);

  const [arrItems, setItems] = useState(() => {
    const savedItems = localStorage.getItem("arrItems");

    // return the parsed JSON object back to a javascript object
    return savedItems ? JSON.parse(savedItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("arrItems", JSON.stringify(arrItems));
  }, [arrItems]);

  //  error state
  // if (error) throw error;

  //Submitting new item
  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id, bought: false, ...item };
    setItems([newItem, ...arrItems]);
  };

  //Button for adding items
  const BtnAdd = ({ onAdd, showAdd }) => {
    return (
      <button className="addBtnStyle" onClick={onAdd}>
        {" "}
        {showAdd ? "Close form" : "Add Item"}
      </button>
    );
  };

  //delete item
  const deleteItem = (id) => {
    setItems(arrItems.filter((item) => item.id !== id));
  };

  const boughtHandler = (id) => {
    setItems(
      arrItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            bought: !item.bought
          };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    filterHandler();
  }, [arrItems, progress]);

  const filterHandler = () => {
    switch (progress) {
      case "bought":
        setFilterBought(arrItems.filter((item) => item.bought === true));
        break;
      case "pending":
        setFilterBought(arrItems.filter((item) => item.bought === false));
        break;
      default:
        setFilterBought(arrItems);
        break;
    }
  };

  const progressHandler = (e) => {
    setProgress(e.target.value);
  };

  const onShowForm = () => {
    setshowForm(!showForm);
  };

  return (
    <div>
      <h1 className="title">Shopping list</h1>

      <BtnAdd onAdd={onShowForm} showAdd={showForm} />

      {showForm && <AddForm onAdd={addItem} />}

      <div className="custom-select">
        <select onChange={progressHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="bought">Bought</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {arrItems.length > 0 ? (
        <ItemList
          filterBought={filterBought}
          arrItems={arrItems}
          onComplete={deleteItem}
          onBought={boughtHandler}
        />
      ) : (
        "No pending items "
      )}
    </div>
  );
}
