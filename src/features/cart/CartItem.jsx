import { formatCurrency } from "../../utilities/helpers.js";
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice.js";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className={"py-3 flex items-center justify-between"}>
      <p className={"mb-1 sm:mb-0"}>
        {quantity}&times; {name}
      </p>
      <div className={"flex items-center justify-center sm:gap-6"}>
        <p className={"text-sm font-bold mr-2"}>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
