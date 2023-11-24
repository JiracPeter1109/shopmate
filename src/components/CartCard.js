import './CartCard.css'


export const CartCard = ({product}) => {
  const {name,price,image} = product
  return (
    <div className="cartCard">
      <img scr={image} alt={name}/>
      <p className="productName">{name}</p>
      <p className="productPrice">{price}</p>
      <button>Remove</button>
    </div>
  )
}
