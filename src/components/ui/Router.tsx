import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CardDetail from "../screens/card-detail/CardDetail";
import EditCard from "../screens/edit-card/EditCard";
import CreateCarForm from "../screens/home/create-product-form/CreateCarForm";
import Home from "../screens/home/Home";
import LogScreen from "../screens/LogScreen";
import ResponsiveAppBar from "./navbar";

function Router() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route element={<LogScreen />} path="/auth/" />
        <Route element={<Home />} path="/" />
        <Route element={<CardDetail />} path="/products/:id/" />
        <Route element={<CreateCarForm />} path="/create/" />
        <Route element={<EditCard />} path="/edit/:id" />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
