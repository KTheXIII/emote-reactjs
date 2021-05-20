import {
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react'

import themeList from '../assets/theme.json'

import '../styles/theme-dropdown.css'

function saveSelectedTheme(theme: string) {
  localStorage.setItem('theme', theme)
  document.body.className = theme
}

function userTheme() {
  return localStorage.getItem('theme') || 'auto-theme'
}

export const AppTheme = (): ReactElement => {
  const [isThemeHidden, setIsThemeHidden] = useState(true)
  const themeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.body.className = userTheme()
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
    .map(theme =>
      <p
        key={theme.name}
        onClick={() => {
          saveSelectedTheme(theme.id)
          setIsThemeHidden(true)
        }}
        onMouseEnter={() => {
          document.body.className = theme.id
        }}
      >
        {theme.name}
      </p>
    )

  return (
    <div className="theme-dropdown">
      <p
        className="noselect"
        onClick={() => {
          setIsThemeHidden(false)
        }}
      >theme</p>
      {
        isThemeHidden ?
          ''
          :
          <div
            className="theme-content"
            ref={themeRef}
          >
            {themeElement}
          </div>
      }
    </div>
  )
}
