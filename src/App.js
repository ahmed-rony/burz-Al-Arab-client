import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DataProvider } from "./Components/Login/DataContext";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home";
import PublicPage from "./Components/Pages/PublicPage";
import AdminPage from "./Components/Pages/AdminPage";
import Editor from "./Components/Pages/Editor";
import Shipment from "./Components/Pages/Shipment";
import Lounge from "./Components/Pages/Lounge";
import Page404 from "./Components/Pages/Page404";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <DataProvider>
      <div
        style={{ textAlign: "center", background: "#3D5B59", color: "#fff" }}
      >
        <h2 style={{ fontSize: "40px" }}>BURZ AL ARAB</h2>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public routes */}
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              {/* Private route */}
              <Route element={<PrivateRoute />}>
                <Route path="/public" element={<PublicPage />}></Route>
                <Route path="/admin" element={<AdminPage />}></Route>
                <Route path="/editor" element={<Editor />}></Route>
                <Route path="/lounge" element={<Lounge />}></Route>
                <Route path="/shipment" element={<Shipment />}></Route>
              </Route>
              {/* catch all */}
              <Route path="*" element={<Page404 />}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
};

export default App;
