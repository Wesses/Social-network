import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
const setAvtivve = ({isActive}) => isActive ? classes.active : classes.item

const NavBar = () => {
    return (
        <nav className={classes.sidebar}>
            <div>
                <NavLink to="/profile" className={setAvtivve}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={setAvtivve}>
                    Dialogs
                </NavLink>
            </div>
            <div>
                <NavLink to="/news" className={setAvtivve}>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to="/music" className={setAvtivve}>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={setAvtivve}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}
export default NavBar;
