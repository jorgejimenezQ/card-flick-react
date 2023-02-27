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
  const [initialX, setInitialX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState(0)

  const threshold = 100
  const componentClassNames = classNames(classes.cardFlickCard)

  // const handleDragStart = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent> & React.TouchEvent<HTMLDivElement>,
  // ) => {
  //   // Prevent the default behaviour of the event
  //   event.preventDefault()

  //   console.log(event.type)
  //   if (event.type === 'touchstart') {
  //     setInitialX(event.touches[0].clientX)
  //   } else {
  //     setInitialX(event.clientX)
  //   }

  //   setActive(true)
  // }

  // const handleDragMove = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent> & React.TouchEvent<HTMLDivElement>,
  // ) => {
  //   if (!active) return

  //   if (event.type === 'touchmove') {
  //     setCurrentX(event.touches[0].clientX)
  //   } else {
  //     setCurrentX(event.clientX)
  //   }

  //   const diffX = currentX - initialX
  //   setPosition(diffX)

  //   if (diffX > 0) {
  //     console.log('right')
  //   }
  // }

  // const handleDragEnd = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>,
  // ) => {}

  // const handleFlyOff = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>,
  // ) => {}

  return (
    <div
      // onTouchStart={handleDragStart}
      // onMouseDown={handleDragStart}
      className={componentClassNames}
      style={{
        left: position,
      }}
    >
      {children}
    </div>
  )
}

export default Card
