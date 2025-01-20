import { FC } from "react";

export const HelloComponent: FC = () => {
  return (
    <>
      <h1>Hello from Vite!</h1>
      <p>The server is {import.meta.env.VITE_API_BASE}</p>
    </>
  );
};
