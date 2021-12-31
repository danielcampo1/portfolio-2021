import React from "react";
import styled from "styled-components";
import image from "../img/profPic.jpg";

function mainCard() {
  return (
    <MainContentStled>
      <div className="main-card">
        <div className="picture">
          <img src={image} alt=""></img>
        </div>
        <div className="Name">hello</div>
        <div className="icon-links">
          <div className="icon-1"></div>
          <div className="icon-2"></div>
          <div className="icon-3"></div>
        </div>
      </div>
    </MainContentStled>
  );
}

const MainContentStled = styled.main`
  background-color: red;
  .main-card {
    margin-top: 10rem;
    margin-left: 20rem;
  }
  .picture {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

export default mainCard;
