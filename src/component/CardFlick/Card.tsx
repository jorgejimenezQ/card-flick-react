import classNames from 'classnames'
import React from 'react'

import classes from '../styles/cardFlick.module.css'

type Props = {
  children: React.ReactNode
  cardIndex: number
}

/**
 * A card component that can be used in a CardFlick component.
 *  This component is a child component of CardFlick. It is not meant to be used on its own. It will
 *  render whatever is passed to it as children.
 * @param props The props for the card component
 * @param props.children The content to render inside the card
 * @returns A card component
 */
const Card: React.FC<Props> = ({ children, cardIndex }) => {
  const componentClassNames = classNames(classes.cardFlickCard)
  return <div className={componentClassNames}>{children}</div>
}

export default Card
