import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './components/Form';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import EditForm from './components/EditForm';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  children:[
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/form",
      element: <Form />
    },
    {
      path: "/form/:id",
      element: <EditForm />
    },
  ]
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
