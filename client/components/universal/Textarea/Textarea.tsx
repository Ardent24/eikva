import React from "react";
import "./Textarea.css";

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const Textarea: React.FC<TextareaProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <textarea
      className={`textarea${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
