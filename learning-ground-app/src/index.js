import React from 'react'; // Imports the react library needed for writing React components, allows writing of JSX
import ReactDOM from 'react-dom/client'; // Imports the ReactDOM library for rendering React components in the web page
import App from './App'; // Imports the App component which contains all the components for the application

const root = ReactDOM.createRoot(document.getElementById("root")); // creates a root container in the DOM where React application will live, and gets the DOM element for the root.
root.render(<App/>); // rendering the App component inside the root element.