import React from "react";
import DirectChild from "./directChild";

export default function DirectParent() {
  return (
    <div>
      <DirectChild name="Junior" age={20} nerd={true} />
      <DirectChild name="Gabriel" age={17} nerd={false} />
    </div>
  );
}
