import styled, { createGlobalStyle } from "styled-components";
import type { AppProps } from "next/app";
import { Header } from "../components/header";

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
* {
  box-sizing: border-box;
}
`;

const ComponentStyle = styled.div``;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
      <Header />
    </>
  );
}
