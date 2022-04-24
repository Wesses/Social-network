import classes from "./FriendsBar.module.css"
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? classes.active : classes.item

const FriendsBar = (props) => {
    return (
        <div className={classes.friendsBar}>
            <div>
                <img className={classes.avatarImg} alt="" src={props.avatar}/>
            </div>
                <NavLink className={setActive} to="/dialogs">{props.name}</NavLink>
        </div>
    )
}
export default FriendsBar;
