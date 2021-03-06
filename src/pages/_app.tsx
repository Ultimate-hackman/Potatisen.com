import { AppProps } from "next/app";
import React from "react";
import "dayjs/locale/sv";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <Component />
  );
}
