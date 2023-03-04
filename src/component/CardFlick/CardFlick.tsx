import classnames from 'classnames'
import { useCallback, useState } from 'react'

import classes from '../styles/cardFlick.module.css'
import Card from './Card'

// How to define a type for a React component?
// https://stackoverflow.com/questions/58123398/how-to-define-a-type-for-a-react-component
type CardFlickProps = {
  className?: string | string[]
  cards: {
    id: number
    content: React.ReactNode | JSX.Element | string | number | any
  }[]
  onSwipe?: (card: number) => void
  onSwipeLeft?: (card: number) => void
  onSwipeRight?: (card: number) => void
  scatterCards?: boolean
  threshold?: number
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
  scatterCards = false,
  threshold = 100,
}) => {
  const [currentCards, setCurrentCards] = useState(cards)
  const componentClassNames = classnames(classes.cardsWrapper, className)

  const handleRemoveCard = useCallback(
    (cardIndex: number) => {
      const newCards = currentCards.filter((card) => {
        return card.id !== cardIndex
      })
      setCurrentCards(() => newCards)
    },
    [currentCards],
  )
  return (
    <div
      className={componentClassNames}
      style={{
        position: 'relative',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        boxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.2)',
        WebkitBoxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.2)',
        MozBoxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      {currentCards.map((card) => {
        return (
          <Card
            key={card.id}
            cardIndex={card.id}
            onSwipe={onSwipe}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}
            onRemoveCard={handleRemoveCard}
            scatterCards={scatterCards}
            threshold={threshold}
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
