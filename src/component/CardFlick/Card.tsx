import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import classNames from 'classnames'
import React, { useState } from 'react'

import classes from '../styles/cardFlick.module.css'

type Props = {
  children: React.ReactNode
  cardIndex: number
  onSwipe?: (card: React.ReactNode) => void
  onSwipeLeft?: (card: React.ReactNode) => void
  onSwipeRight?: (card: React.ReactNode) => void
  onRemoveCard?: (cardIndex: number) => void
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
  const threshold = 100

  const [cardPos, api] = useSpring(() => ({ x: 0 }))
  const cardBind = useDrag(({ down, movement: [mx], direction: [xDir], velocity }) => {
    api.start({ x: down ? mx : 0, immediate: down })
  })
  const componentClassNames = classNames(classes.cardFlickCard)

  return (
    <animated.div
      // onTouchStart={handleDragStart}
      // onMouseDown={handleDragStart}
      className={componentClassNames}
      {...cardBind()}
      style={{
        left: cardPos.x,
        transform: `rotateX(${cardPos.x}deg)`,
        touchAction: 'none',
      }}
    >
      {children}
    </animated.div>
  )
}

export default Card
