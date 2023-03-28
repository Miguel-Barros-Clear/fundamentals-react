import React from "react";
import _if, { Else } from "./if";

export default (props) => {
  let user = props.user || {};
  return (
    <div>
      <_if test={user && user.name}>
        Seja bem vindo <strong>{user.name}</strong>
        <Else>
          Seja bem vindo <strong>amigão</strong>
        </Else>
      </_if>
    </div>
  );
};
