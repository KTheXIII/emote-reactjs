import { useRef } from 'react'

import { AppName } from './components/AppName'
import { Emote, IEmoteRef } from './components/Emote'
import { AppFooter } from './components/AppFooter'

export function App(): JSX.Element {
  const emoteRef = useRef<IEmoteRef>(null)

  return (
    <div className="app">
      <AppName
        title={'./emote'}
        refreshButton={() => emoteRef.current?.randomEmote()}
      />
      <Emote ref={emoteRef} />
      <AppFooter
        link='https://github.com/KTheXIII'
        name='2021 © KTheXIII'
        githublink='https://github.com/KTheXIII/emote-reactjs'
      />
    </div>
  )
}
