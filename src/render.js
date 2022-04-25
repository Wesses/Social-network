import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {addPost, sendMyMassage} from "./Redux/State";

export let renderEntireTree = (state) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <Router>
                <App state={state} addPost={addPost} sendMyMassage={sendMyMassage}/>
            </Router>
        </React.StrictMode>
    );
}
