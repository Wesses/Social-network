import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
const setActive = ({isActive}) => isActive ? classes.active : classes.dialog

const User = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink className={setActive} to={props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.area}>
            <div className={classes.dialogs} >
                <User id={"1"} name={"Anton"}/>
                <User id={"2"} name={"Ura"}/>
                <User id={"3"} name={"Nikita"}/>
                <User id={"4"} name={"Soc"}/>
                <User id={"5"} name={"Sofa"}/>
                <User id={"6"} name={"Busya"}/>

            </div>
            <div className={classes.messages}>
                <Message message = {"Hi"}/>
                <Message message = {"How r u?"}/>
                <Message message = {"Bye"}/>
            </div>
        </div>
    )
}

export default Dialogs;
