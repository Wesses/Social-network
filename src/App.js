import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import FirstPage from "./Components/FirstPage/FirstPage";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.store.getState().sidebarstate}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<FirstPage/>}/>

                    <Route path="/dialogs/*" element={<DialogsContainer />}/>
                    <Route path="/profile" element={<Profile />}/>

                    <Route path="/music" element={<Music/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
