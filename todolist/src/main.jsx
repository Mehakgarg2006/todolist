import { Fragment, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import ToDo from './ToDo.jsx';
import Store from "./Store.jsx";
import { Provider } from 'react-redux';

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Fragment>
  <Provider store={Store}>
    <ToDo></ToDo>
  </Provider>
</Fragment>);
