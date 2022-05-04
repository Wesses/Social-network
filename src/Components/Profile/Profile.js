import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.MainP} alt="" src ="https://w.wallhaven.cc/full/wq/wallhaven-wqkqvr.png" />
            </div>
           <ProfileInfo/>
          <MyPostContainer store = {props.store}/>
        </div>
    )
}
export default Profile;
