//first file to be loaded in react

import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));//second arguement points to public->index.html file; Replacing content of that div section by <App />

