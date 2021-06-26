import { ReactElement } from 'react'

interface IAppFooter {
  link: string
  name: string
  githubLink?: string
}

export function AppFooter(props: IAppFooter): ReactElement {
  return (
    <div className="app-footer noselect" >
      <a
        title="Github repository link"
        rel="noreferrer"
        target="_blank"
        href={props.githubLink ? props.githubLink : '/'}
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
