import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store'
import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </Router>
    </React.StrictMode>,
);

// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <Provider store={store}>
//                 <App store={store}/>
//             </Provider>
//         </Router>
//     </React.StrictMode>,
//     (document.getElementById('root'))
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
