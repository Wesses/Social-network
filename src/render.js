import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {addPost, sendMyMessage, updateMyMessage, updateNewPostText} from "./Redux/State";


export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App state={state}
                     addPost={addPost}
                     sendMyMessage={sendMyMessage}
                     updateNewPostText={updateNewPostText}
                     updateMyMessage={updateMyMessage}/>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

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
