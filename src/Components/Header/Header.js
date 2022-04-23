import classes from "./Header.module.css"

const Header = () =>{
    return (
        <header className={classes.header}>
            <div>
                <img alt="" className={classes.headerimg} src = "https://w7.pngwing.com/pngs/813/77/png-transparent-logo-hemp-leaf-line-font-leaf.png"/>
            </div>
            <div className={classes.idinahuy}>
                social-network
            </div>
        </header>
    )
}
export default Header;
