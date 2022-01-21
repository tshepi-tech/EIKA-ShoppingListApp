import Item from "./Item";

const ItemList = ({ onComplete, onBought, filterBought }) => {
  return (
    <>
      {filterBought.map((item) => (
        <Item
          key={item.id}
          item={item}
          onComplete={onComplete}
          onBought={onBought}
        />
      ))}
    </>
  );
};

export default ItemList;
