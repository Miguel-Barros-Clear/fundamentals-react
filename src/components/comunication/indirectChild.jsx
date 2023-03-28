import React from "react";

export const IndirectChild = (props) => {
  const callback = props.handelClick;

  return (
    <div>
      <div>filho</div>
      <button handelClick={() => callback("João", 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};
