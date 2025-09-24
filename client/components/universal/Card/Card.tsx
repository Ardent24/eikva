import React from "react";
import "./Card.css";

interface AlertProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Card: React.FC<AlertProps> = ({ className, children, ...props }) => {
  return (
    <div className={`card${className ? " " + className : ""}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
