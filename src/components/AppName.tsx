import { ReactElement } from 'react'
import { AppThemeDropdown } from './AppThemeDropdown'

interface IAppName {
  title: string
  titleClicked?: () => void
}

export const AppName: React.FC<IAppName> = (props): ReactElement => {
  const { titleClicked } = props

  return (
    <div className="app-name">
      <div className="options"></div>
      <h1 className="app-title noselect"
        onClick={titleClicked}
      >{props.title}</h1>
      <div className="options">
        <AppThemeDropdown />
      </div>
    </div>
  )
}
