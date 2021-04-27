import { useState } from 'react'

const emoteList = [
  '(o _ o)',
  '(>_<)',
  '(っ˘̩╭╮˘̩)っ',
  '(×_×)',
  '(×﹏×)',
  '(＋_＋)',
  '(・・;)ゞ',
  '(・_・)',
  '( ͠° ͟ʖ ͡°)',
  '( ಠ ʖ̯ ಠ)',
  '(￣ ￣|||)',
  '(`ー´)',
  '¯\\_(ツ)_/¯',
]

export function Emote(): JSX.Element {
  const [emote, setEmote] = useState('(>_<)')

  return (
    <div className="emote-container">
      <p
        id="emote-display"
        className="noselect"
        onClick={() => {
          const i = Math.floor(Math.random() * emoteList.length)
          setEmote(emoteList[i])
        }}>{emote}</p>
    </div>
  )
}
