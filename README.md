# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click

### Screenshot

![imagen](https://github.com/Miller1999/Shortly/assets/22383830/7c27b17c-cc6b-4b9d-9a28-7d472884a1f0)

### Links

- Solution URL: [Repository](https://github.com/Miller1999/Shortly)
- Live Site URL: [Shortly](https://shortly-gamma-azure.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - React framework
- [SASS](https://sass-lang.com/) - For styles
### What I learned

I learned how to work with proxies to avoid problems with cors. also this is my first project using SASS and I love how you can transform your CSS

```scss
@mixin flexCenter($direction, $align, $justify) {
	display: flex;
	flex-direction: $direction;
	align-items: $align;
	justify-content: $justify;
}

@mixin buttonTransparent() {
	border: none;
	background-color: transparent;
	color: white;
	border-radius: 20px;
}

@mixin generalContainer() {
	@include flexCenter(column, center, center);
	background-color: transparentize($color: $Gray, $amount: 0.8);
	gap: 2rem;
	@media (min-width: 767px) {
		padding: 0rem 5rem;
	}
}
```
```js
const convertLink = async () => {
		try {
			const response = await fetch(
				"https://corsproxy.io/?" +
					encodeURIComponent("https://cleanuri.com/api/v1/shorten"),
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams({
						url: original,
					}),
				}
			);
			return await response.json();
		} catch (error) {
			console.error("Error:", error);
		}
	};
}
```


### Continued development

In my next projects, I want to improve my scss skills and my knowledge on React, also i want to introduce TypeScript 

### Useful resources

- [Vite.js](https://vitejs.dev) - I chose to leverage this framework to boost my component's performance while also benefiting from its straightforward folder structure

## Author

- Website - [Miller Arias](https://portafolio-miller-arias.vercel.app)
- Frontend Mentor - [@Miller1999](https://www.frontendmentor.io/profile/Miller1999)
- Twitter - [@miller_arias](https://twitter.com/miller_arias)
- Github - [@Miller1999](https://github.com/Miller1999)
