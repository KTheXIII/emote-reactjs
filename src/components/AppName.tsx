
interface IAppName {
  title: string
  titleClicked?: () => void
}

export function AppName(props: IAppName): JSX.Element {
  const { titleClicked } = props

  return (
    <div className="app-name">
      <p className="app-title noselect"
        onClick={titleClicked}
      >{props.title}</p>
    </div>
  )
}
