import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleDetails from "./components/ArticleDetails";
import ArticleList from "./components/ArticleList";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ArticleList />
              </>
            }
          />
          <Route path="/article/:articleID" element={<ArticleDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
