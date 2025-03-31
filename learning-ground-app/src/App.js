import Counter from './Counter';
import { Provider } from './context/Context';


const App = () => {

    return (
        <div>
            <title>Title</title>
            <h1>Hi I'm the app</h1>
            <Provider>
                <Counter/>
            </Provider>
        </div>
    )
}

export default App;