import {lazy, Suspense, useEffect} from 'react'
import {coy as highlighter}        from 'react-syntax-highlighter/dist/esm/styles/prism'
import {useImmer}                  from 'use-immer'

import Loading      from 'content/Loading.js'

import FAQS         from 'content/page/AboutMe/faqs.md'
import intro        from 'content/page/AboutMe/intro.md'
import whatIUse     from 'content/page/AboutMe/what-i-use.md'
import credits      from 'content/page/AboutMe/credits.md'
import content      from 'content/page/MyHobby/content.md'
import desktop      from 'content/page/MyHobby/desktop.md'
import others       from 'content/page/MyHobby/others.md'
import web          from 'content/page/MyHobby/web.md'

const ReactMarkdownWithHtml = require('react-markdown/with-html')

const SyntaxHighlighter = lazy(() => import('SyntaxHighlighter.js'))

const pages = {FAQS, intro, whatIUse, credits, content, desktop, others, web}

const GetSubRoutes = (paths) => {
  const [contents, setContents] = useImmer({})

  useEffect(() => {
    paths.forEach(path => {
      fetch(pages[path])
        .then(data => data.text())
        .then(text => {
          setContents(draft => {
            draft[path] = text
          })
        })
    })
  // eslint-disable-next-line
  }, [])

  const renderers = {
    code: ({language, value}) => {
      return (
        <SyntaxHighlighter style={highlighter} language={language} children={value} />
      )
    }
  }
//     <Suspense fallback={<ReactMarkdown source={contents[path]} />}>
//     <ReactMarkdown renderers={renderers} source={contents[path]} />
    // <Suspense fallback={<ReactMarkdownWithHtml children={contents[path]} allowDangerousHtml />}>
  const routes = paths.reduce((a, path) => ({...a, ['/' + path]: () => 
    <Suspense fallback={<Loading />}>
      <ReactMarkdownWithHtml renderers={renderers} children={contents[path]} allowDangerousHtml />
    </Suspense>
  }), {})
  return routes
}

export default GetSubRoutes
// const getSubRoutes = (pages, contents) => {
//   return pages.reduce((map, url) => {
//     map['/' + url] = () =>
//       <Suspense fallback={<Loading />}>
//         <ReactMarkdownWithHtml renderers={renderers} children={contents[url]} allowDangerousHtml />
//       </Suspense>
//     return map
//     }, {})
// }
//
