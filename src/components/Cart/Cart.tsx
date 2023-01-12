import CartItem from "../CartItem/CartItem"
import { Wrapper } from "./Cart.styles"
import { CartItemType } from "../../App"

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in the cart.</p> : null}
      {cartItems.map(item => (
        <CartItem />
      ))}
    </Wrapper>
  )
}

export default Cart;