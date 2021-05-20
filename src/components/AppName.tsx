import { ReactElement, useEffect } from 'react'

import { AppTheme } from './AppTheme'

import '../styles/header.css'

interface IAppName {
  title: string
  refreshButton?: () => void
}

export const AppName: React.FC<IAppName> = (props): ReactElement => {
  const { refreshButton } = props

  function onKeyDown(e: KeyboardEvent) {
    if (e.key == 'Tab') {
      e.preventDefault()
      if (refreshButton)
        refreshButton()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div className="app-name">
      <div className="left"></div>
      <div className="center">
        <h1 className="app-title noselect"
          onClick={refreshButton}
        >{props.title}</h1>
      </div>
      <div className="right">
        <div className="options">
          <AppTheme />
          <span
            className="refresh noselect"
            onMouseDown={refreshButton}
          >refresh</span>
        </div>
      </div>
    </div>
  )
}
