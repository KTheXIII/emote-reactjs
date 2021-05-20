import { ReactElement } from 'react'

// import { refreshIcon } from '../assets/icons'
import { AppThemeDropdown } from './AppThemeDropdown'

import '../styles/header.css'

interface IAppName {
  title: string
  titleClicked?: () => void
}

export const AppName: React.FC<IAppName> = (props): ReactElement => {
  const { titleClicked } = props

  return (
    <div className="app-name">
      <div className="options"></div>
      <div className="center">
        <h1 className="app-title noselect"
          onClick={titleClicked}
        >{props.title}</h1>
        {/* <button className="refresh-btn">{refreshIcon}</button> */}
      </div>
      <div className="options">
        <AppThemeDropdown />
      </div>
    </div>
  )
}
