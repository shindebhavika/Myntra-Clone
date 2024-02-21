import { bagActions } from "../store/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

function HomeItem({ item }) {
  const dispatch = useDispatch();

  function handleAddToBag() {
    dispatch(bagActions.addToBag(item.id));
  }
  function handleRemove() {
    dispatch(bagActions.removeFromBag(item.id));
  }
  const bag = useSelector((store) => store.bag);

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {bag.includes(item.id) ? (
        <button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemove}>
          <MdOutlineDelete /> Remove
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          <MdAddShoppingCart /> Add to Bag
        </button>
      )}
    </div>
  );
}

export default HomeItem;
