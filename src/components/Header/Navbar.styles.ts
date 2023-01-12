import styled from "styled-components";

export const Wrapper = styled.div`
  .navbar {
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    width: 100%;
    height: 70px;
    padding-right: 8%;
    padding-left: 8%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background: #f3e2f4;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    .navbar {
      padding: 0;
    }
  }

  .brand {
    font-family: "Arial";
  }

  h3 {
    font-size: "16px";
  }

  .MuiSvgIcon-root {
    color: #670b78;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    .MuiSvgIcon-root {
      color: #670b78;
    }
  }
`;
