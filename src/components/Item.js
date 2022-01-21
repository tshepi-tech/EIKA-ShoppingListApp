const Item = ({ item, onComplete, onBought }) => {
  //select functions
  const selectDelete = () => {
    onComplete(item.id);
  };

  const selectBought = () => {
    onBought(item.id);
  };

  return (
    <div className={`item ${item.bought ? "bought" : ""}`}>
      <h3>{item.name} </h3>
      <h4>{item.price}</h4>
      <p>{item.note}</p>
      <button className="boughtBtn" onClick={selectBought}>
        Bought
      </button>
      <button className="deleteBtn" onClick={selectDelete}>
        Delete
      </button>
    </div>
  );
};

export default Item;
