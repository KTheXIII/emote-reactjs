import { ReactElement } from 'react'

interface IAppName {
  title: string
  titleClicked?: () => void
}

export const AppName: React.FC<IAppName> = (props): ReactElement => {
  const { titleClicked } = props

  return (
    <div className="app-name">
      <h1 className="app-title noselect"
        onClick={titleClicked}
      >{props.title}</h1>
    </div>
  )
}
