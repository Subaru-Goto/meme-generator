import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route} from "react-router-dom";
import Home from "./Home"
import Layout from "./components/Layout";
import RandomMeme, {loader as memesLoader} from './view/RandomMeme';
import OwnPicture from './view/OwnPicture';
import './index.css';
import 'tailwindcss/tailwind.css'
import Error from './components/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route
      path="/random"
      element={<RandomMeme />}
      loader={memesLoader}
      // where is import or definition for Error component?
      errorElement={<Error />}/>
    <Route path="/own-picture" element={<OwnPicture />}/>
  </Route>
));

const App = () => {
  return (<RouterProvider router={router} />)
};

const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);