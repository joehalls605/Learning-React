function App() {
    const [colours, setColours] = useState([]); // State to store the list of colours

    const addColourAtIndex = (newColour, index) => {
        const updatedColours = [ // Creating a new array (important for React to detect changes)
            ...colours.slice(0, index), // Copy all colours before the given index
            newColour,                  // Insert the new colour at the desired index
            ...colours.slice(index)     // Copy the remaining colours after the index
        ];

        setColours(updatedColours); // Update state with the new array
    }
}
