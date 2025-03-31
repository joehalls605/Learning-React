import {createContext, useState} from 'react';

// Creating a custom context to manage and share state across components
const Context = createContext();

// The Provider component will wrap parts of the app and provide context data

function Provider({children}){
    const [count, setCount] = useState(0);

    const valueToShare = {
        someText: "I'm some text",
        count,
        setCount
    }

    return (
        <Context.Provider value={valueToShare}/>
    )
}

export { Provider }
export default Context;

