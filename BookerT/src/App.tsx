import React from "react";
import ReactDOM from "react-dom/client";
import { CoreStateProvider } from "./state";
import { Layout } from "./layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { INavigationProps } from "./layouts/Navigation";
import BooksPage from "./pages/Books";
import AuthorsPage from "./pages/Authors";
import { Icon, Text } from "./components";
import "./index.css";

const App: React.FC = () => {
  const navPorpss: INavigationProps["routes"] = [
    { name: "Books", icon: "book", route: "/books" },
    { name: "Authors", icon: "avatar", route: "authors" },
  ];
  const Logo = () => {
    return (
      <span style={{ display: "flex", margin: "auto" }}>
        <Icon name="book-logo" color="white" />{" "}
        <Text
          margin="0 0 0 8px"
          type="title"
          color="white"
          children={"BookerT"}
          bold
        />
      </span>
    );
  };

  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Layout
        sidenavConfig={{
          appLogo: <Logo />,
          routes: navPorpss,
        }}
        footerLogo="BOOKERT"
      >
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/authors" element={<AuthorsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <CoreStateProvider>
    <App />
  </CoreStateProvider>
);
