## Custom React App: Learning React Under the Hood

This project is designed to help you understand how React works behind the scenes by building and experimenting 
with custom rendering functions. 

It starts with a minimal implementation of a `custom render` function to mimic React's rendering logic and evolves
into using React's official libraries for a deeper understanding of its API.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Custom Rendering (Manual Implementation)](#custom-rendering-manual-implementation)
4. [React Components and JSX](#react-components-and-jsx)
5. [React.createElement Explanation](#reactcreateelement-explanation)
6. [Using React with `createRoot`](#using-react-with-createroot)
7. [Things to Learn](#things-to-learn)
8. [How to Run](#how-to-run)
9. [Next Steps](#next-steps)

---

## Introduction

This repository focuses on building a deeper understanding of React by:
- Implementing custom rendering logic without React.
- Exploring how React internally uses objects like `reactElement` and how it maps them to the DOM.
- Gradually transitioning to official React code using `JSX` and `createRoot`.

This is ideal for beginners and curious developers who want to understand the "magic" behind React.

---


## Project Structure

The project consists of the following files:

1. **`index.html`**: The entry point for your application. This contains a `<div>` with an ID of `root` where the app will render.
2. **`customreact.js`**: Implements the custom rendering function to map a React-like object to the DOM.
3. **Second Example**: Builds on the concepts learned in `customreact.js` using React’s official APIs.

---



## Custom Rendering (Manual Implementation)

In `customreact.js`, we manually implement a rendering function `customRender` to convert a React-like object into DOM elements.


### Code Explanation

```javascript
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const props in reactElement.props) {
        if (props === 'children') continue;
        domElement.setAttribute(props, reactElement.props[props]);
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
















