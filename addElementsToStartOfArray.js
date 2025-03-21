function App(){
    const [colours, setColours] = useState([]);

    const addColour = (newColour) => {
        const updatedColours = [ // creating a new array
            ...colours, // copying existing colours
            newColour // adding the new colours
        ];
    }
}

const renderedColours = colours.map((colour, i) => {
    return <li key={i}>{colour}</li>
});