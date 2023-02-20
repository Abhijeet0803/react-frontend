
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import  ReactDOM  from 'react-dom/client';
// import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

// const appRouter = createBrowserRouter([{
//   path: "/",
//   element: <App />
// },
// {
//   path: "form",
//   element: <Form />
// }
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider root={appRouter}/>);

export default App;
