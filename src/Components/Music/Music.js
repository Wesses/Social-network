import classes from "./Music.module.css";
import bolt from '../../audio/plenka - Visitor.mp3';

const Music = () => {
    return (
        <div><h1>Music</h1>
            <div>
                <audio src={bolt} controls/>
            </div>
        </div>
    )
}

export default Music;
