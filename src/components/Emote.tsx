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
  let lastIndex = 0

  return (
    <div className="emote-container"
      onClick={() => {
        let i = Math.floor(Math.random() * emoteList.length)
        if (lastIndex == i) {
          i = (i < emoteList.length) ? i++ : i--
          lastIndex = i
        }
        setEmote(emoteList[i])
      }}>
      <p
        id="emote-display"
        className="noselect"
      >{emote}</p>
    </div>
  )
}
