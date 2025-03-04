//import './Profile.css';
import accountData from './data/accounts.json';
import characterData from './data/characters.json';
import lightconeData from './data/lightcones.json';
import { useParams } from 'react-router-dom';

function Profile() {
    const { code } = useParams();
    const character = characterData.characters.find(character => character.code === code);

    return (
        <div id="profile-div" className="profile">
            <p>{character.name}</p>
        </div>
    );
}

export default Profile;
