# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). 

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
Challenge started Monday 14-11 before courses.
As I am currently taking PHP courses, I wanted to keep using Javascript in my free time because it has been pretty difficult to me at the beginning and I don't want to lose everything I got then.
The time showing is the delay I have to find and start a training period in a company as a developper.

### The challenge

Users should be able to:
- See hover states for all interactive elements on the page : 

This was the easy part as there are only 3 social medias icons in the bottom. Generally speaking about the static part of the project, the trickier part for me was to design the cards with their concave rounded edges in the middle of the cards. I have to go back a litlle bit on the responsive as it's still ugly at certain widths. But the hardest part wasn't there yet...

- See a live countdown timer that ticks down every second (start the count at 14 days) : 

Pretty easy with JS. I certainly will factorize the code relating to time later as it is a little too heavy in ressources at the moment. The time displayed is the delay I have to find and start a training period in a company as a developper ^^'

- **Bonus**: When a number changes, make the card flip from the middle : 

THIS was HELL (still is actually) as I want it to be realistic and having the halves of cards falling from the top while bending in the middle. I had to play with setInterval and transform transition in CSS. This is currently (11/16/2022) still a work in progress, the 'seconds' part almost working but... only on Google Chrome, so I'll have to do some research about css comptatibility with Mozilla Firefox (the other navigator I tested) and others.

### Screenshot

// TODO when finished
![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

// TODO when finished

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://animated-vacherin-6586ed.netlify.app/](https://animated-vacherin-6586ed.netlify.app/)

## My process

I'm a newbie and as such I'm not really well organized, though I began with the static front and everything around the cards, then the cards. 

Once the design was mainly OK, I moved to JS to animate the cards.
The simple version on Netlify is OK.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS for interactivity
- to be continued...

### What I learned

I definitely understood 'position: relative' and 'position: absolute' in CSS which were not that clear in my mind.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Github - [@Laure-Riglet](https://github.com/Laure-Riglet/)
- Frontend Mentor - [@Laure-Riglet](https://www.frontendmentor.io/profile/Laure-Riglet)
- Twitter - [@L4ur3l3i](https://www.twitter.com/l4ur3l3i)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
