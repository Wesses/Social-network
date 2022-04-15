import classes from "./Profile.module.css";
import MyPost from "../Profile/MyPost/MyPost";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.MainP} alt="" src ="https://chudo-udo.info/media/k2/items/cache/46b48ff5dea1e8c04bc5a53cc4723d74_XL.jpg" />
            </div>
            <div>
                <img className={classes.Ava} alt="" src = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" />
            </div>
            <div className={classes.item}>
                Name:
            </div>
            <div className={classes.item}>
                Date of birth:
            </div>
            <div className={classes.item}>
                City:
            </div>
            <div className={classes.item}>
                Education:
            </div>
            <div className={classes.item}>
                Web site:
            </div>
          <MyPost/>
        </div>
    )
}
export default Profile;
