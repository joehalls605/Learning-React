import React, {useState} from 'react';

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div>
        <h1>Conditional Rendering Example</h1>
        {isLoggedIn ? (
        <p>Welcome back user!</p>) : (
            <p>Please log in</p>
         )}
        <button onClick={handleLoginToggle}>
            {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
    </div>
    );
}

function App(){
    const [view, setView] = useState("login");

    const handleViewChange = (newView) => {
        setView(newView);
    }

    return (
        <div>
            <h1>Conditional rendering examples</h1>

            {view === 'login' && ( // If the left expression is false, JS will not evaluate the second expression, in this case returning the JSX
                <div>
                    <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Log In</button>
                    </form>
                    <button onClick={() => handleViewChange('signup')}>Sign Up</button>
                    <button onClick={() => handleViewChange('forgotPassword')}>Forgot Password?</button>
                </div>
            )}

            {view === 'signup' && (
                <div>
                    <h2>Sign Up</h2>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Sign Up</button>
                    </form>
                    <button onClick={() => handleViewChange('login')}>Already have an account? Log In</button>
                </div>
            )}

            {view === 'forgotPassword' && (
                <div>
                    <h2>Forgot Password</h2>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Reset Password</button>
                    </form>
                    <button onClick={() => handleViewChange('login')}>Back to Log In</button>
                </div>
            )}
        </div>
    );
}
