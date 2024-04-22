
import PropTypes from 'prop-types';

const ProductCard = ({title, imageUrl, price}) => {
  return(
      <div className="productCard">
        <img src={imageUrl} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
      </div>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,

};
export default ProductCard;