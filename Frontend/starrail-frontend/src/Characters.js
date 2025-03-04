//import './Characters.css';
import accountData from './data/accounts.json';
import characterData from './data/characters.json';
import lightconeData from './data/lightcones.json';

const CharacterList = () => {
    const characterList = characterData.characters.map(character => <a href={"/characters/" + character.code}>{character.name}</a>)
    return <div>{characterList}</div>
}

function Characters() {
    return (
        <div id="characters-div" className="characters">
            <CharacterList />
        </div>
    );
}

export default Characters;
