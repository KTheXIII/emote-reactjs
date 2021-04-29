import {
  useState,
  useRef,
  Ref,
  useImperativeHandle,
  forwardRef
} from 'react'

import emotes from '../assets/emojis.json'

export interface IEmoteProps {
  title?: string
}

export interface IEmoteRef {
  randomEmote: () => void
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

export const Emote = forwardRef((props: IEmoteProps, ref: Ref<IEmoteRef>) => {
  const emoteTextRef = useRef<HTMLTextAreaElement | null>(null)
  const [emote, setEmote] = useState(getRandomEmote())
  const [tool, setTool] = useState('Copy')

  useImperativeHandle(ref, () => ({ randomEmote }))

  const [isHidden, setHidden] = useState(true)
  const copyArea = <textarea
    id="emote-copy-area"
    value={emote}
    ref={emoteTextRef}
    onChange={() => { return }}
    rows={24}
    cols={80}>
  </textarea>

  let copyTimeout: number
  const copyTimeoutDelay = 10

  const randomEmote = () => {
    setEmote(getRandomEmote())
  }
  return (
    <div className="emote-container"
      onKeyPress={e => {
        e.preventDefault()
      }}
    >
      <div className="emote-copy"
        onClick={() => {
          if (!copyTimeout) {
            setHidden(false)

            copyTimeout = window.setTimeout(() => {
              emoteTextRef.current?.select()
              emoteTextRef.current?.setSelectionRange(0, 99999)
              document.execCommand('copy')
              setTool('Copied!')

              emoteTextRef.current?.blur()

              setHidden(true)
              clearTimeout(copyTimeout)
            }, copyTimeoutDelay)
          }
        }}
        onMouseOut={() => {
          setTool('Copy')
        }}>
        <span id="emote-display" className="noselect">{emote}</span>
        {isHidden ? '' : copyArea}
        <span
          className="emote-tooltip noselect"
        >{tool}</span>
      </div>
    </div >
  )
})
