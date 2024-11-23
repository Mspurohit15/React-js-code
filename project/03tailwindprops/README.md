# **TailwindCSS and Props in React**

## **Project Overview**
This project demonstrates how to integrate **TailwindCSS** with a React project and how to use **props** to pass data from one component to another. We will build a simple app that renders reusable card components styled with TailwindCSS.

---

## **Getting Started: Setting Up TailwindCSS in a React Project**

### 1. **Install TailwindCSS**
If you already have a React project created, install TailwindCSS via npm:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
---
### 2. **Configure TailwindCSS**
Edit the tailwind.config.js file to include your project files in the content property:
```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


```
---
### 3. **Add Tailwind to Your CSS**

Import Tailwind’s base, components, and utilities in your App.css or index.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

---

### 4. **Start the Development Server**
Run your project to see TailwindCSS in action:
```
npm start

```

---

# **Props in React**

## **What Are Props?**
Props (short for **properties**) are a way to pass data from a **parent component** to a **child component** in React. They enable you to customize and reuse components dynamically.

---

## **Why Use Props?**

### **1. Reusability**
Props make components reusable by allowing them to work with different data.

### **2. Dynamic Behavior**
Props allow you to customize components at runtime, making them flexible and adaptable.

### **3. Data Flow**
Props enable **one-way data flow** in React, which simplifies the management of data and enhances code predictability.

---
# **Code Implementation** 

### App.jsx :

This is the main component where we pass props to the Card component:

```
import './App.css';
import Card from './components/Card.jsx';

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>
      <Card userName="Naresh Purohit" btnText="Click me" />
      <Card userName="Mahi Purohit" btnText="Visit me" />
    </>
  );
}

export default App;

```

- Here’s what happens:

1. Card is used twice with different values for userName and btnText.
2. TailwindCSS classes are applied to style the heading.

---

### Card.jsx :

```
import React from 'react';

function Card({ userName, btnText = "Visit me" }) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="User"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{userName}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;

```
---

# **Key Points**

- **Props Destructuring**: `userName` and `btnText` are destructured from props.
- **Default Props**: If `btnText` isn’t provided, it defaults to `"Visit me"`.
- **TailwindCSS Styling**: TailwindCSS is used for responsive and modern styling.

---

## **Key Learnings**

### **1. Integrating TailwindCSS**
- Utility-first styling simplifies complex designs.
- TailwindCSS provides responsive classes for margins, paddings, backgrounds, and more.

### **2. Using Props**
- Props enable the reuse of components with dynamic data.
- Default props ensure components behave predictably when certain props are not passed.

---

## **Conclusion**

This project showcased:

1. How to integrate **TailwindCSS** into a React project for modern styling.
2. The use of **props** to make components reusable and customizable.

By combining **TailwindCSS** with **props**, you can create dynamic and visually appealing React apps effortlessly.




