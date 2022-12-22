import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MainImageBanner, Headline, MediaTextBanner, ProductImageBanner } from "../components"
import Seo from "../components/seo"
import '../index.scss'

const MarketingLandingPage = (props) => {
  const { allSanityMarketingPage, allSanityLayout } = props.data;
  const landingPage = allSanityMarketingPage.edges[0].node;
  const layout = allSanityLayout.edges[0].node;
  const { mainImageBanner, top_headline, mediaTextBanner, bottom_headline, productImageBanner } = landingPage;
  return (
    <Layout data={layout} >
      <MainImageBanner data={mainImageBanner} />
      <Headline data={top_headline} />
      <MediaTextBanner data={mediaTextBanner} />
      <Headline data={bottom_headline} />
      <ProductImageBanner data={productImageBanner} />
    </Layout>
  )
}
export default MarketingLandingPage;

export const Head = (props) => {
  return <Seo title={"MarketingLandingPage"} />
}

export const pageQuery = graphql`
query MarketingPage {
  allSanityMarketingPage {
    edges {
      node {
        metaData {
          title
          description
          slug {
            current
          }
        }
        _createdAt
        mainImageBanner {
          image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          heading
          sub_heading
        }
        top_headline {
          heading
          text_content
        }
        mediaTextBanner {
          media {
            image {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
            video {
              asset {
                assetId
                filename
                playbackId
                status
                thumbTime
              }
            }
            title
            media_instruction
            media_link
            new_tab
            media_allocation
          }
          mediaText {
            heading
            text_content
          }
        }
        bottom_headline {
          heading
          text_content
        }
        productImageBanner {
          media {
            title
            date
            media_info
            image {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
            video {
              asset {
                assetId
                filename
                playbackId
                status
                thumbTime
              }
            }
            media_link
            new_tab
          }
        }
      }
    }
  }
  allSanityLayout {
    edges {
      node {
        layoutHeader {
          logoImage {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          navItems {
            text
            href
            icon
          }
        }
        layoutFooter {
          quickLinks {
            text
            href
          }
          blog {
            text
            href
          }
          copyright
        }
      }
    }
  }
}`