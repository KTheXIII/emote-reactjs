
interface IAppName {
  title: string
  titleClicked?: (() => void)
}

export function AppName(props: IAppName): JSX.Element {
  return (
    <div className="app-name">
      <p className="app-title noselect"
        onClick={props.titleClicked}
      >{props.title}</p>
    </div>
  )
}
