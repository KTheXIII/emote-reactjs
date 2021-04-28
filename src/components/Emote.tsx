import {
  useState,
  useRef,
  useEffect
} from 'react'
import emotes from '../assets/emojis.json'

interface IEmote {
  randomise?: number
}

let lastIndex = 0
const emoteList = emotes.list
function getRandomEmote() {
  let i = Math.floor(Math.random() * emoteList.length)
  if (lastIndex == i) {
    i = (i < emoteList.length) ? i++ : i--
    lastIndex = i
  }
  return emoteList[i]
}

export function Emote(props: IEmote): JSX.Element {
  const emoteTextRef = useRef<HTMLInputElement | null>(null)
  const [emote, setEmote] = useState(getRandomEmote())
  const [tool, setTool] = useState('Copy')

  useEffect(() => {
    setEmote(getRandomEmote())
  }, [props.randomise])

  return (
    <div className="emote-container"
      onKeyPress={e => {
        e.preventDefault()
      }}
    >
      <div className="emote-copy"
        onClick={() => {
          emoteTextRef.current?.select()
          emoteTextRef.current?.setSelectionRange(0, 99999)
          document.execCommand('copy')
          setTool('Copied!')
        }}
        onMouseOut={() => {
          setTool('Copy')
        }}>
        <span id="emote-display" className="noselect">{emote}</span>
        <input
          type="text"
          id="emote-copy-input"
          value={emote}
          ref={emoteTextRef}
          onChange={() => { /* */ }} />
        <span
          className="emote-tooltip noselect"
        >{tool}</span>
      </div>
    </div >
  )
}
