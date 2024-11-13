# why to learn React??

-> hype, job, trend, build UI 
-> Makes easy to manage & build complex front end 


# When should I learn React?

-> After mastering JS
-> Most projects don't need to react in the initial phase 

# Why react was created?

React was created by Facebook in 2011 to solve some major problems they were facing while building their web applications.

## The Problem:

As Facebook's app grew, it needed to manage many different parts of the user interface (UI), such as the news feed, chat, and notifications. At that time, they were using traditional methods with JavaScript and jQuery to update the UI. This approach worked for smaller apps, but as Facebook got bigger, the UI became harder to manage. They faced issues like:

- **Complexity**: Updating parts of the page manually with jQuery was becoming messy and prone to bugs.
- **Performance**: Updating the UI was getting slower, especially when many things needed to change at once.
- **Maintenance**: As the app grew, it became difficult to keep track of which parts of the UI should be updated and when.

-- State - Javascript &   UI - DOM 

Facebook needed a better way to handle these problems.

## The Solution: React
One of Facebook's engineers, **Jordan Walke**, came up with a solution. Instead of manually telling the browser how to update the page (which was slow and complex), he suggested a new idea: let developers describe **what the UI should look like**, and React would figure out the most efficient way to update the page automatically.

So the idea of to sync UI and State with React.

### Virtual DOM:
React introduced the concept of the **Virtual DOM**. The virtual DOM is a lightweight copy of the actual page structure. When something changes, React updates the virtual DOM first, then compares it with the actual DOM. It then makes **only the necessary changes** to the real page, which makes the updates faster and more efficient.

### First Use:
React was first used in Facebook’s **news feed**, and it worked well. Later, Facebook used React to rebuild **Instagram**, further proving its value.

## Open Sourcing React:
In **2013**, Facebook decided to open-source React, allowing developers around the world to use it in their projects. At first, some developers were skeptical, especially about the use of **JSX** (a syntax that combines HTML with JavaScript), but over time, React's performance and simplicity won people over.


## Why Is React Popular Today?
React solved many problems that big, dynamic apps faced:
- **Simpler code**: Developers can focus on describing what the UI should look like, rather than how to update it.
- **Faster performance**: The virtual DOM makes updates more efficient, improving the app’s speed.
- **Component-based structure**: React allows developers to break down the UI into small, reusable parts (called components), making the code easier to manage and maintain.

Today, React is one of the most popular libraries for building web applications, used by companies like Facebook, Instagram, Airbnb, and Netflix.

---

React was created to solve real-world problems at Facebook, and now it helps developers everywhere build fast, efficient, and scalable web apps.
















