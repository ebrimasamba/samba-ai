import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1335px] mx-auto px-5`}>{children}</div>
  );
};

export default Container;
