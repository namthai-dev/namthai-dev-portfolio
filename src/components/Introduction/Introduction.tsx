import React from "react";
import "./Introduction.css";

import { HiOutlineArrowDown } from "react-icons/hi";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introduction__viewport introduction__viewport--first">
        <span
          style={{ fontSize: "15vh", fontWeight: "700", lineHeight: "12vh" }}
        >
          CREATIVE
          <br />
          DEVELOPER
        </span>
      </div>
      <div className="introduction__viewport introduction__viewport--second">
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="avatar"
          style={{ height: "25vh" }}
        />
      </div>
      <div className="introduction__viewport introduction__viewport--third">
        <HiOutlineArrowDown style={{ flex: "20%" }} size="25vh" />
        <div
          style={{
            flex: "30%",
            fontSize: "2vh",
            fontWeight: "900",
            lineHeight: "2vh",
            textAlign: "center",
            wordWrap: "break-word",
            paddingTop: "20vh",
          }}
        >
          <span>I APPLY MACHINE LEARNING WITH CREATIVE DEVELOPMENT</span>
        </div>
        <span
          style={{
            flex: "50%",
            fontSize: "12vh",
            fontWeight: "700",
            lineHeight: "10vh",
            textAlign: "right",
            letterSpacing: "1vh",
            margin: "auto",
          }}
        >
          Nam Thai
        </span>
      </div>
    </div>
  );
};

export default Introduction;
