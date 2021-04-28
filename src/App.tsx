import { useState } from 'react'
import { AppName } from './components/AppName'
import { Emote } from './components/Emote'
import { AppFooter } from './components/AppFooter'

function App(): JSX.Element {
  const [randomise, randomEmote] = useState(0)

  return (
    <div className="app">
      <AppName
        title={'./emote'}
        titleClicked={() => {
          randomEmote(Math.random())
        }}
      />
      <Emote randomise={randomise} />
      <AppFooter
        link='https://github.com/KTheXIII'
        name='2021 © KTheXIII'
        githublink='https://github.com/KTheXIII/emote-reactjs'
      />
    </div>
  )
}

export default App
