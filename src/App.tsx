import { useRef } from 'react'
import { AppName } from './components/AppName'
import { Emote, IEmoteRef } from './components/Emote'
import { AppFooter } from './components/AppFooter'
// import { AppAddCustom } from './components/AppAddCustom'

export function App(): JSX.Element {
  const emoteRef = useRef<IEmoteRef>(null)

  return (
    <div className="app">
      <AppName
        title={'./emote'}
        titleClicked={() => emoteRef.current?.randomEmote()}
      />
      <Emote ref={emoteRef} />
      {/* <AppAddCustom /> */}
      <AppFooter
        link='https://github.com/KTheXIII'
        name='2021 © KTheXIII'
        githublink='https://github.com/KTheXIII/emote-reactjs'
      />
    </div>
  )
}
