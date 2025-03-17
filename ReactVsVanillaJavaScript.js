// Vanilla JS: Creating a heading and adding it to the body
const heading = document.createElement('h2');
heading.textContent = "Hello from Vanilla JS!";
document.body.appendChild(heading);

// React: Creating a heading using JSX
const Heading = () => {
    return <h2>Hello from React!</h2>;
};

// Vanilla JS: Create a button and add it to the body
const button = document.createElement('button');
button.textContent = 'Click Me!';
button.addEventListener('click', () => {
    alert('Button clicked in Vanilla JS!');
});
document.body.appendChild(button);


// React: Create a button using JSX and handle a click event
const Button = () => {
    const handleClick = () => {
        alert('Button clicked in React!');
    };
    return <button onClick={handleClick}>Click Me!</button>;
};

