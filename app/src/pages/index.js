import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Homepage(props) {
  const { homepage } = props.data
  console.log(homepage)
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
  return <SEOHead {...homepage} />
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
        ...HomepageHeroContent
        ...HomepageTopTextBarContent
        ...HomepageImageTextBarContent
        ...HomepageBottomTextBarContent
        ...HomepageImageBarContent
      }
    }
  }
`