
// Components
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import LinearProgress from '@material-ui/core/LinearProgress';

// Styles
import { Wrapper } from "./App.styles";

// Types
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number,
};


const getProducts = async () => {
  await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;
