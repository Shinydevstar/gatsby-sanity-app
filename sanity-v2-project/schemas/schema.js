import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import marketingPage from "./marketingPage"
import marketingPageHeadline from "./marketingPageHeadline"
import marketingPageLink from "./marketingPageLink"
import marketingPageMainImageBanner from './marketingPageMainImageBanner'
import marketingPageMedia from './marketingPageMedia'
import marketingPageMediaTextBanner from "./marketingPageMediaTextBanner"
import marketingPageMetaData from './marketingPageMetaData'
import marketingPageProductImage from "./marketingPageProductImage"
import marketingPageProductImageBanner from "./marketingPageProductImageBanner"

import layout from "./layout"
import layoutFooter from './layoutFooter'
import layoutHeader from './layoutHeader'
import footerBlog from './footerBlog'
import footerQuickLinks from './footerQuickLinks'

import navItem from './navItem'
import navItemGroup from './navItemGroup'

export default createSchema({

  name: "default",

  types: schemaTypes.concat([

    marketingPage,
    marketingPageHeadline,
    marketingPageLink,
    marketingPageMetaData,
    marketingPageMainImageBanner,
    marketingPageMedia,
    marketingPageMediaTextBanner,
    marketingPageProductImage,
    marketingPageProductImageBanner,

    layout,
    layoutFooter,
    layoutHeader,
    footerBlog,
    footerQuickLinks,

    navItem,
    navItemGroup

  ]),
})
