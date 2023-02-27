import classnames from 'classnames'
import { useState } from 'react'

import classes from '../styles/cardFlick.module.css'
import Card from './Card'

// How to define a type for a React component?
// https://stackoverflow.com/questions/58123398/how-to-define-a-type-for-a-react-component
type CardFlickProps = {
  className?: string | string[]
  cards: {
    id: number
    content: React.ReactNode
  }[]
  onSwipe?: (card: React.ReactNode) => void
  onSwipeLeft?: (card: React.ReactNode) => void
  onSwipeRight?: (card: React.ReactNode) => void
}

/**
 * A component that renders a list of cards that can be flicked through.
 * @param {CardFlickProps} props The props for the CardFlick component
 *
 * @returns A CardFlick component
 *
 * @throws Will throw an error if the cards prop is not provided
 * @throws Will throw an error if the cards prop is not an array
 * @throws Will throw an error if the cards prop is an empty array
 * @example
 * <CardFlick cards={[{ id: 1, content: <div>Card 1</div> }]} />
 */
export const CardFlick: React.FC<CardFlickProps> = ({
  cards,
  className,
  onSwipe,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const [activeCard, setActiveCard] = useState<any | null>(null)
  const [currentCards, setCurrentCards] = useState(cards)

  // Check for the existence of the cards prop
  if (!cards) {
    throw new Error('The cards prop is required')
  }

  // Check that the cards prop is an array
  if (!Array.isArray(cards)) {
    throw new Error('The cards prop must be an array')
  }

  // Check that the cards prop is not empty
  if (cards.length === 0) {
    throw new Error('The cards prop must not be empty')
  }

  const componentClassNames = classnames(classes.cardsWrapper, className)

  const handleRemoveCard = (cardIndex: number) => {
    const newCards = currentCards.filter((card) => card.id !== cardIndex)
    setCurrentCards(() => newCards)
  }

  return (
    <div className={componentClassNames}>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            cardIndex={card.id}
            onSwipe={onSwipe}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
          >
            {card.content}
          </Card>
        )
      })}
    </div>
  )
}

CardFlick.defaultProps = {
  onSwipe: () => {},
  onSwipeLeft: () => {},
  onSwipeRight: () => {},
}
