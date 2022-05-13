import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.MainP} alt="" src ="https://w.wallhaven.cc/full/wq/wallhaven-wqkqvr.png" />
            </div>
           <ProfileInfo/>
          <MyPostContainer/>
        </div>
    )
}
export default Profile;
