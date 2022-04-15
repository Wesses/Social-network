import './App.css';
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";


const App = () => {
    return (
        <div className="grid">
            <Header/>
            <NavBar/>
            <Profile/>

        </div>
    );
};

export default App;
