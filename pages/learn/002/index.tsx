import React from "react";
import MyGLSL from "../../../components/common/MyGLSL"

const frag = require("./shader/002.frag");

const _002: React.FC = () => {
  return <MyGLSL frag={frag.default} vert="" />;
};

export default _002;
