import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

    const description = reactDescriptions[genRandomInt(3)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Study case Pham Long</h1>
            <p>
                {description} React study
            </p>
        </header>
    );
}