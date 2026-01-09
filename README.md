# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3db160be1c). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Design preview](./desktop.png)

### Links

- Solution URL: [Add your GitHub URL here]
- Live Site URL: [Add your Vercel/Netlify URL here]

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom Properties
- Flexbox
- Mobile-first workflow
- [Sass/SCSS](https://sass-lang.com/) - CSS Preprocessor 
- Vanilla JavaScript - Form Validation and State Management

### What I learned

In this project, I focused on implementing a robust form validation system and managing different UI states (signup vs. success) without using any external frameworks.

One of the key technical challenges was handling the responsive image swap using the `<picture>` tag:

```html
<picture>
  <source srcset="./assets/images/illustration-sign-up-desktop.svg" media="(min-width: 900px)">
  <img src="./assets/images/illustration-sign-up-mobile.svg" alt="" aria-hidden="true">
</picture>
```

I also improved my SCSS skills by organizing styles into modular components and using BEM (Block Element Modifier) naming conventions to keep the codebase maintainable.

### Author

- Baskoro Ramadhan