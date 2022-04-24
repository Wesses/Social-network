import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
const setActive = ({isActive}) => isActive ? classes.active : classes.dialog

const User = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink className={setActive} to={`${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
export default User;
