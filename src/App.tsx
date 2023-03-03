import { useEffect, useRef, useState } from 'react'

import classes from './app.module.css'
import { CardFlick } from './component/CardFlick/CardFlick'

type Card = {
  id: number
  content: JSX.Element | string | number | any
}

function App() {
  const [cards, setCards] = useState(new Array<Card>())
  const cardsArray = new Array<Card>()
  const effectRan = useRef(false)

  useEffect(() => {
    if (effectRan.current) return
    effectRan.current = true
    const suits = ['clubs', 'diamonds', 'hearts', 'spades']
    const newCards: Card[] = []
    let cardIndex = 0

    suits.forEach((suit) => {
      for (let i = 1; i <= 13; i++) {
        let cardUrl = 'assets/cards-png/'
        let cardDescription = ''

        if (i === 1) {
          cardUrl += `ace_of_${suit}.png`
          cardDescription = `Ace of ${suit}`
        } else if (i === 11) {
          cardUrl += `jack_of_${suit}2.png`
          cardDescription = `Jack of ${suit}`
        } else if (i === 12) {
          cardUrl += `queen_of_${suit}2.png`
          cardDescription = `Queen of ${suit}`
        } else if (i === 13) {
          cardUrl += `king_of_${suit}2.png`
          cardDescription = `King of ${suit}`
        } else {
          cardUrl += `${i}_of_${suit}.png`
          cardDescription = `${i} of ${suit}`
        }

        const image = new URL(cardUrl, import.meta.url)

        newCards.push({
          id: cardIndex++,
          content: (
            <div className={classes.card}>
              <img src={image.href} alt={cardDescription} />
            </div>
          ),
        })
      }
    })

    // Shuffle the cards
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newCards[i], newCards[j]] = [newCards[j], newCards[i]]
    }

    cardsArray.push(...newCards)
    setCards(newCards)
  }, [])

  const handleSwipe = (cardIndex: number) => {}
  const handleSwipeLeft = (cardIndex: number) => {}

  const handleSwipeRight = (cardIndex: number) => {}
  return (
    <CardFlick
      className={classes.cardContainer}
      cards={cardsArray}
      onSwipe={handleSwipe}
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      scatterCards={true}
    />
  )
}

export default App
