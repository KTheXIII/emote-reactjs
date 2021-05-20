import {
  ReactElement,
  useState,
  useRef,
  Ref,
  useImperativeHandle,
  forwardRef,
  useEffect
} from 'react'

import emotes from '../assets/emotes.json'

import '../styles/emote.css'

export interface IEmoteProps {
  title?: string
}

export interface IEmoteRef {
  randomEmote: () => void
}

interface IEmote {
  emote: string
}

let lastIndex = 0
function getRandomEmote(): IEmote {
  let i = Math.floor(Math.random() * emotes.length)
  if (lastIndex == i) {
    i = Math.floor(Math.random() * emotes.length)
    lastIndex = i
  }
  return emotes[i]
}

function EmoteComponent(props: IEmoteProps, ref: Ref<IEmoteRef>): ReactElement {
  const emoteTextRef = useRef<HTMLTextAreaElement | null>(null)
  const [emote, setEmote] = useState<IEmote>() // e
  const [tooltip, setTooltip] = useState('Copy')

  // Bind the randomEmote function
  useImperativeHandle(ref, () => ({ randomEmote }))
  const randomEmote = () => {
    setEmote(getRandomEmote())
  }

  const [isHidden, setHidden] = useState(true)
  const copyArea: ReactElement = <textarea
    id="emote-copy-area"
    value={emote?.emote}
    ref={emoteTextRef}
    onChange={() => { return }}
    rows={24}
    cols={80}
  ></textarea>

  let copyTimeout: number       // timeout id
  const COPY_TIMEOUT_DELAY = 10 // ms

  useEffect(() => {
    setEmote(getRandomEmote())
  }, [])

  return (
    <div className="emote-container">
      <div className="emote-copy"
        onClick={() => {
          if (!copyTimeout) {
            setHidden(false)
            copyTimeout = window.setTimeout(
              () => {
                emoteTextRef.current?.select()
                emoteTextRef.current?.setSelectionRange(0, 99999)
                document.execCommand('copy')
                setTooltip('Copied!')

                emoteTextRef.current?.blur()

                setHidden(true)
                clearTimeout(copyTimeout)
              },
              COPY_TIMEOUT_DELAY)
          }
        }}
        onMouseOut={() => setTooltip('Copy')}>
        <span id="emote-display" className="noselect">{emote?.emote}</span>
        {isHidden ? '' : copyArea}
        <span className="emote-tooltip noselect">{tooltip}</span>
      </div>
    </div >
  )
}

export const Emote = forwardRef(EmoteComponent)
