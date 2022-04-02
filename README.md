# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot](./images/screenshot.png)


### Links

- Solution URL: [Github repo](https://github.com/salmanetamo/interactive-rating)
- Live Site URL: [Live URL of solution](http://salmanetamo.github.io/interactive-rating.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

This really took me back to the basics. I tried doing the whole challenge without any frameworks, and it made me realize how much heavy lifting CSS and Javascript frameworks do for us.

I considered using a form with radio buttons for the ratings but styling radio buttons is quite tricky, so I simply reverted to using good old event listeners.

This was my first time using radial-gradient.

```css
.card {
    ...
    background-image: radial-gradient(at top, var(--dark-blue) 10%, hsl(213, 15%, 10%));
    ...
}
```

## Author

- Linkedin - [Salmane TAMO](https://www.linkedin.com/in/salmane-tamo/)
- Frontend Mentor - [@salmanetamo](https://www.frontendmentor.io/profile/salmanetamo)
- Twitter - [@salmanetamo](https://www.twitter.com/salmanetamo)
