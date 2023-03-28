import React from "react";

export default (props) => {
  const callback = props.onClick;

  const randomAge = () => parseInt(Math.random() * 20) + 50;
  const randomNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>filho</div>
      <button onClick={() => callback("João", randomAge(), randomNerd())}>
        Fornecer Informações
      </button>
    </div>
  );
};
