import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import FriendsBar from "./FriendsBar/FriendsBar";
const setActive = ({isActive}) => isActive ? classes.active : classes.item

const NavBar = (props) => {
    let BFriendMapping = props.state.BFriendsData.map(m => <FriendsBar key={m.id + m.name} name={m.name}
                                                             avatar={m.avatar}/>);
    return (
        <nav className={classes.sidebar}>
            <div>
                <NavLink to="/profile" className={setActive}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={setActive}>
                    Dialogs
                </NavLink>
            </div>
            <div>
                <NavLink to="/news" className={setActive}>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to="/music" className={setActive}>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={setActive}>
                    Settings
                </NavLink>
            </div>

            <div className={classes.navfriends}>
                <h3>Friends</h3>
                {BFriendMapping}
            </div>
        </nav>
    )
}
export default NavBar;
