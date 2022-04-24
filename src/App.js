import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import FirstPage from "./Components/FIrstPage/FirstPage";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path = "/" element = {<FirstPage />} />
                        <Route path = "/dialogs/*" element = {<Dialogs state = {props.state.dialogstate}/>} />
                        <Route path = "/profile" element = {<Profile state={props.state.poststate} />} />
                        <Route path = "/music" element = {<Music/>} />
                        <Route path = "/news" element = {<News/>} />
                        <Route path = "/settings" element = {<Settings/>} />
                    </Routes>
                </div>
     </div>
    );
};

export default App;
