import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import FirstPage from "./Components/FirstPage/FirstPage";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.state.sidebarstate}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<FirstPage/>}/>

                    <Route path="/dialogs/*" element={<Dialogs
                        dialogstate={props.state.dialogstate}
                        sendMyMessage={props.sendMyMessage}
                        updateMyMessage={props.updateMyMessage}/>}/>

                    <Route path="/profile" element={<Profile
                        poststate={props.state.poststate}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>}/>

                    <Route path="/music" element={<Music/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
