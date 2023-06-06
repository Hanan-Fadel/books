import './index.css';

import {Provider} from './context/books';

import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
    <div>
        <Provider>
        {/* <!-- Now the App component and all its children have access to value prop --> */}
            <App /> 
        </Provider>

    </div>
);