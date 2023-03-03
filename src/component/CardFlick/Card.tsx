import { animated, config, to as interpolate, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

import classes from '../styles/cardFlick.module.css'

type Props = {
  children: React.ReactNode
  cardIndex: number
  onSwipe?: (card: number) => void
  onSwipeLeft?: (card: number) => void
  onSwipeRight?: (card: number) => void
  onRemoveCard: (cardIndex: number) => void
  scatterCards?: boolean
  threshold?: number
}

/**
 * A card component that can be used in a CardFlick component.
 *  This component is a child component of CardFlick. It is not meant to be used on its own. It will
 *  render whatever is passed to it as children.
 * @param props The props for the card component
 * @param props.children The content to render inside the card
 * @param props.cardIndex The index of the card in the list of cards
 * @param props.onSwipe A callback function that is called when the card is swiped
 * @param props.onSwipeLeft A callback function that is called when the card is swiped left
 * @param props.onSwipeRight A callback function that is called when the card is swiped right
 * @param props.onRemoveCard A callback function that is called when the card is removed from the list of cards
 * @param props.threshold The threshold at which the card will be removed from the list of cards. It is a number between 0 and 1
 * @returns A card component
 */
const Card: React.FC<Props> = ({
  children,
  cardIndex,
  onRemoveCard,
  onSwipe,
  onSwipeLeft,
  onSwipeRight,
  scatterCards = false,
  threshold = 1,
}) => {
  const [swipeComplete, setSwipeComplete] = useState(false)
  const [initialRotation, setInitialRotation] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    // map the threshold to a number between 0 and the window width
  }, [])

  // useSpring is a hook from react-spring that allows us to animate values
  const [cardPos, api] = useSpring(() => ({ x: 0, scale: 1 }))
  // When the card is swiped, this spring will animate the card off the screen

  // set the initial rotation of the card when it is first rendered
  useEffect(() => {
    if (scatterCards) setInitialRotation(Math.random() * 20 - 10)
  }, [])

  // useDrag is a hook from use-gesture that allows us to detect dragging gestures
  const cardBind = useDrag(({ down, movement: [mx], direction: [xDir], velocity }) => {
    // if swiped disable dragging
    if (swipeComplete) return

    api.start({ x: down ? mx : 0, scale: down ? 1.1 : 1, immediate: down })
    if (down && Math.abs(mx) > threshold) {
      setSwipeComplete(true)

      // animate the card off the screen
      api.start({
        x: (windowWidth * xDir) / 1,
        immediate: false,
        config: config.molasses,
      })

      // call all the callback functions
      if (onSwipe) onSwipe(cardIndex)
      if (xDir > 0 && onSwipeRight) onSwipeRight(cardIndex)
      if (xDir < 0 && onSwipeLeft) onSwipeLeft(cardIndex)

      // wait .5 sec and remove the card from the list of cards
      setTimeout(() => {
        onRemoveCard(cardIndex)
      }, 250)
    }
  })
  const componentClassNames = classNames(classes.cardFlickCard)

  return (
    <animated.div
      className={componentClassNames}
      {...cardBind()}
      style={{
        left: cardPos.x,
        // transform: cardPos.x.to(
        //   (x) => `rotate(${initialRotation + x / 10}deg) scale(${cardPos.scale})`,
        // ),
        transform: interpolate([cardPos.x, cardPos.scale], (x, s) => {
          return `rotate(${initialRotation + x / 10}deg) scale(${s})`
        }),
        touchAction: 'none',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        userSelect: 'none',
      }}
    >
      {children}
    </animated.div>
  )
}

export default Card
