import classes from './app.module.css'
import { CardFlick } from './component/CardFlick/CardFlick'

function App() {
  const cards = [
    {
      id: 1,
      content: (
        <div>
          <h1>Card 1</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nostrum provident
            enim ea corporis necessitatibus porro quidem repellendus!.
          </p>
        </div>
      ),
    },

    {
      id: 2,
      content: (
        <div>
          <h1>Card 2</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nostrum provident
            enim ea corporis necessitatibus porro quidem repellendus!.
          </p>
        </div>
      ),
    },

    {
      id: 3,
      content: (
        <div>
          <h1>Card 3</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nostrum provident
            enim ea corporis necessitatibus porro quidem repellendus!.
          </p>
        </div>
      ),
    },

    {
      id: 4,
      content: (
        <div>
          <h1>Card 4</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nostrum provident
            enim ea corporis necessitatibus porro quidem repellendus!.
          </p>
        </div>
      ),
    },

    {
      id: 5,
      content: (
        <div>
          <h1>Card 5</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nostrum provident
            enim ea corporis necessitatibus porro quidem repellendus!.
          </p>
        </div>
      ),
    },

    {
      id: 6,
      content: (
        <div>
          <h1>Card 6</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nostrum provident
            enim ea corporis necessitatibus porro quidem repellendus!.
          </p>
        </div>
      ),
    },

    {
      id: 7,
      content: (
        <div>
          <h1>Card 7</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nostrum provident
            enim ea corporis necessitatibus porro quidem repellendus!.
          </p>
        </div>
      ),
    },

    {
      id: 8,
      content: (
        <div>
          <h1>Card 8</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nostrum provident
            enim ea corporis necessitatibus porro quidem repellendus!.
          </p>
        </div>
      ),
    },
  ]
  return <CardFlick className={classes.cardContainer} cards={cards} />
}

export default App
