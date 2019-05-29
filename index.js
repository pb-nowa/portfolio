import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<div>loaded</div>, root);
});