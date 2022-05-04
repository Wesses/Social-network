import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App store = {store}/>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(()=> {
    renderEntireTree()})

// import ReactDOM from 'react-dom/client';
// export let renderEntireTree = (state) => {
//     ReactDOM.createRoot(document.getElementById('root')).render(
//         <React.StrictMode>
//             <Router>
//                 <App state={state} addPost={addPost} sendMyMassage={sendMyMassage}/>
//             </Router>
//         </React.StrictMode>
//     );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
