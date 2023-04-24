import {
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react'
import { infoIcon } from '../assets/icons'

import themeList from '../assets/theme.json'

import '../styles/theme-dropdown.css'

function saveTheme(theme: string) {
  localStorage.setItem('theme', theme)
  document.body.className = theme
}

function userTheme() {
  return localStorage.getItem('theme') || 'auto-theme'
}

export const AppTheme = (): ReactElement => {
  const [isThemeHidden, setIsThemeHidden] = useState(true)
  const themeRef = useRef<HTMLDivElement | null>(null)

  // The color transition animation is not on when the page load
  let transitionTimeout: number
  const TRANSITION_ON_START_DELAY = 500

  useEffect(() => {
    document.body.className = userTheme()
    // This put the color transition animation after some time when the page
    // has been loaded
    if (!transitionTimeout) {
      transitionTimeout = window.setTimeout(() => {
        const root = document.querySelector('#root')
        root?.classList.remove('color-transition')
        root?.classList.add('color-transition')
      }, TRANSITION_ON_START_DELAY)
    }
  }, [])

  function onClickOutsideTheme(event: MouseEvent) {
    if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
      document.body.className = userTheme()
      setIsThemeHidden(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutsideTheme)
    return () => {
      document.removeEventListener('mousedown', onClickOutsideTheme)
    }
  }, [themeRef])

  // Create the dropdown element from JSON list
  const themeElement = themeList
    .map((theme, index) =>
      <div
        className="theme-element"
        onMouseEnter={() => {
          document.body.className = theme.id
        }}
        key={theme.name + index}>
        <p
          onClick={() => {
            saveTheme(theme.id)
            setIsThemeHidden(true)
          }}
        >
          {theme.name}
        </p>
        <a className="theme-info"
          title={`${theme.name} source`}
          rel="noreferrer"
          target="_blank"
          href={theme.source}
        >
          {infoIcon}
        </a>
      </div>
    )

  return (
    <div className="theme-dropdown">
      <p
        className="noselect"
        onClick={() => {
          setIsThemeHidden(false)
        }}
      >theme</p>
      {!isThemeHidden &&
        <div
          className="theme-content"
          ref={themeRef}>
          {themeElement}
        </div>
      }
    </div>
  )
}
