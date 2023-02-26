import classnames from 'classnames'

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
export const CardFlick: React.FC<CardFlickProps> = ({ cards, className }) => {
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

  return (
    <div className={componentClassNames}>
      {cards.map((card) => {
        return (
          <Card key={card.id} cardIndex={card.id}>
            {card.content}
          </Card>
        )
      })}
    </div>
  )
}
