import { ReactElement } from 'react'

interface IAppFooter {
  link: string
  name: string
  githublink?: string
}

export function AppFooter(props: IAppFooter): ReactElement {
  return (
    <div className="app-footer noselect" >
      <a
        title="Github repository link"
        rel="noreferrer"
        target="_blank"
        href={props.githublink ? props.githublink : '/'}
      >Github Repository</a>
      <span>|</span>
      <a title="Github profile link"
        rel="noreferrer"
        target="_blank"
        href={props.link}
        id="github-link">{props.name}</a>
    </div >
  )
}
