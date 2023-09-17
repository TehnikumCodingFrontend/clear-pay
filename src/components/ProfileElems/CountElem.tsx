import React from "react";
import { SCCountElem } from "./ProfileElems.style";

interface ICountElemProps {
  count: number;
  countDescription: string;
}

export const CountElem = ({ count, countDescription }: ICountElemProps) => {
  return (
    <SCCountElem>
      <p className="count">{count}</p>
      <p className="countDescription">{countDescription}</p>
    </SCCountElem>
  );
};
