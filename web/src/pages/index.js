import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components"
import Fallback from "../utils/fallback"
import Seo from "../components/seo"

export default function Homepage(props) {
  const { homepage } = props.data
  console.log(sections)
  return (
    <Layout>
      {homepage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}
export const Head = (props) => {
  const { homepage } = props.data
  return <Seo {...homepage} />
}

export const query = graphql`
  {
    homepage {
      id
      title
      description
      blocks: content {
        id
        blocktype
        ...HomepageContent
        ...HomepageTopTextBarContent
        ...HomepageImageTextBarContent
        ...HomepageBottomTextBarContent
        ...HomepageImageBarContent
      }
    }
  }
`