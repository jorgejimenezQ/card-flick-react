#Card Flick React - Card Flick React is a lightweight package for implementing a card swiping effect in your React web application. With just a few lines of code, you can easily add a Tinder-like swiping feature to your app.

## Installation

To install Card Flick React, simply run the following command in your terminal:

```bash
npm install card-flick-react
```

## Usage

To use Card Flick React, you can import the CardFlick component from the package and use it in your React component as follows:

```jsx
import React from 'react'
import CardFlick from 'card-flick-react'

const cards = [
  { id: 1, content: 'Card 1' },
  { id: 2, content: 'Card 2' },
  { id: 3, content: 'Card 3' },
]

function MyComponent() {
  const handleSwipeRight = (card) => {
    console.log(`Swiped right on card with ID ${card.id}`)
  }

  const handleSwipeLeft = (card) => {
    console.log(`Swiped left on card with ID ${card.id}`)
  }

  const handleSwipe = (card) => {
    console.log(`Swiped on card with ID ${card.id}`)
  }

  return (
    <CardFlick
      cards={cards}
      onSwipeRight={handleSwipeRight}
      onSwipeLeft={handleSwipeLeft}
      onSwipe={handleSwipe}
    />
  )
}
```

In this example, we define an array of cards and pass it to the CardFlick component. We also define three callback functions: handleSwipeRight, handleSwipeLeft, and handleSwipe, which are called when the user swipes right, left, or either direction on a card, respectively.

The CardFlick component renders the cards and handles the swiping effect. By default, cards are swiped by dragging them with the mouse or touch gestures.

## Props

The CardFlick component accepts the following props:

### cards

An array of objects representing the cards to be displayed. Each object should have a unique id property and a content property, which can be any valid React element or string.

```jsx
const cards = [
  { id: 1, content: 'Card 1' },
  { id: 2, content: 'Card 2' },
  { id: 3, content: 'Card 3' },
]

...

<CardFlick cards={cards} />
```

## onSwipeRight

A callback function called when the user swipes right on a card. The function is passed the card object as an argument.

```jsx
const handleSwipeRight = (card) => {
  console.log(`Swiped right on card with ID ${card.id}`)
}

...

<CardFlick onSwipeRight={handleSwipeRight} />
```

## onSwipeLeft

A callback function called when the user swipes left on a card. The function is passed the card object as an argument.

```jsx
const handleSwipeLeft = (card) => {
  console.log(`Swiped left on card with ID ${card.id}`)
}

...

<CardFlick onSwipeLeft={handleSwipeLeft} />
```

## onSwipe

A callback function called when the user swipes either direction on a card. The function is passed the card object as an argument.

```jsx
const handleSwipe = (card) => {
  console.log(`Swiped on card with ID ${card.id}`)
}

...

<CardFlick onSwipe={handleSwipe} />
```

## Contributing

If you find a bug or want to suggest a new feature, feel free to open an issue on the GitHub repository. Pull requests are also welcome.

## License

Card-Flick is open-source software licensed under the MIT license. See the LICENSE file for more details.
