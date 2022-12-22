
import { FaBitcoin } from "react-icons/fa"

export default {
  name: "marketingPage",
  icon: FaBitcoin,
  title: "Marketing Landing Page",
  type: "document",
  fields: [
    { 
      name: 'metaData',
      title: 'MetaData',
      type: 'metaData',
    },
    {
      name: "mainImageBanner",
      title: "Main Image Banner",
      type: "mainImageBanner",
    },
    {
      name: "top_headline",
      title: "Top Headline",
      type: "headline",
    },
    {
      name: "mediaTextBanner",
      title: "Media and Text Banner",
      type: "mediaTextBanner",
    },
    {
      name: "bottom_headline",
      title: "Bottom Headline",
      type: "headline",
    },
    {
      name: "productImageBanner",
      title: "Product Image Bannerner",
      type: "marketingPageProductImageBanner",
    }
  ],
}