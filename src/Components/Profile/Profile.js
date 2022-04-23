import classes from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.MainP} alt="" src ="https://chudo-udo.info/media/k2/items/cache/46b48ff5dea1e8c04bc5a53cc4723d74_XL.jpg" />
            </div>
           <ProfileInfo/>
          <MyPost/>
        </div>
    )
}
export default Profile;
