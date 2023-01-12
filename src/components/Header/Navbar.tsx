import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

import { CartItemType } from "../../App";

import "./Navbar.styles"

import { Wrapper } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="brand">
          <h3 style={{ color: "#670B78", paddingLeft: 15 }}>Chimoney Cart</h3>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;