function App(){
    const [colours, setColours] = useState([]);

    const addColour = (newColour) => {
        const updatedColours = [ // creating a new array
            ...colours, // copying existing colours
            newColour // adding the new colours
        ];
        setColours(updatedColours);
    }
}