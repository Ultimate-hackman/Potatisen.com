import { AppProps } from "next/app";

import "dayjs/locale/sv";

export default function App({ Component }: AppProps) {
  return (
    <Component />
  )
}