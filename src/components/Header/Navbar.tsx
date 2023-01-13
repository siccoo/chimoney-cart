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