import classes from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={classes.sidebar}>
            <div className={classes.item}><a>Profile</a></div>
            <div className={`${classes.item} ${classes.active}`}><a>Messages</a></div>
            <div className={classes.item}><a>News</a></div>
            <div className={classes.item}><a>Music</a></div>
            <div className={classes.item}><a>Settings</a></div>
        </nav>
    )
}
export default NavBar;
