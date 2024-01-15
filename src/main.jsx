import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route} from "react-router-dom";
import Home from "./Home"
import Layout from "./components/Layout";
import RandomMeme, {loader as memesLoader} from './View/RandomMeme';
import OwnPicture from './view/OwnPicture';
import './index.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route
     path="/random"
     element={<RandomMeme />}
     loader={memesLoader}
     errorElement={<Error />}/>
    <Route path="/own-picture" element={<OwnPicture />}/>
  </Route>
));

const App = () => {
  return (<RouterProvider router={router} />)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);