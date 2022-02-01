import { useState } from "react";

const AddForm = ({ onAdd, setProgress }) => {
  //each item having own component level state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [note, setNote] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add item");
      return;
    }
    if (price < 0) {
      alert("price must be more than 0SEK");
      return;
    }
    onAdd({ name, price, note });
    //clear form
    setName("");
    setPrice("");
    setNote("");
  };

  //onChange functions
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const noteHandler = (e) => {
    setNote(e.target.value);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Item</label>
        <input
          type="text"
          placeholder="Add Item"
          value={name}
          onChange={nameHandler}
          setProgress={setProgress}
        />
      </div>
      <div className="form-control">
        <label>Price</label>
        <input
          type="number"
          placeholder="Add Price"
          value={price}
          onChange={priceHandler}
          setProgress={setProgress}
        />
      </div>
      <div className="form-control">
        <label>Note</label>
        <input
          type="text"
          placeholder="Note on item"
          value={note}
          onChange={noteHandler}
          setProgress={setProgress}
        />
      </div>
      <input type="submit" value="Save Item" className="btn btn-block" />
    </form>
  );
};

export default AddForm;
