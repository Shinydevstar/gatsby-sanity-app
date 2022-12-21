import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import homepage from "./homepage"
import homepageLink from "./homepageLink"
import homepageHero from "./homepageHero"
import homepageTopTextBar from "./homepageTopTextBar"
import homepageBottomTextBar from "./homepageBottomTextBar"
import homepageProductImage from "./homepageProductImage"
import homepageImageBar from "./homepageImageBar"
import homepageImageTextBar from "./homepageImageTextBar"

import navItem from "./navItem"
import navItemGroup from "./navItemGroup"
import footerBlog from "./footerBlog"
import footerQuickLinks from "./footerQuickLinks"
import layoutHeader from "./layoutHeader"
import layoutFooter from "./layoutFooter"
import layout from "./layout"

import page from "./page"

export default createSchema({

  name: "default",

  types: schemaTypes.concat([

    homepage,
    homepageLink,
    homepageHero,
    homepageTopTextBar,
    homepageBottomTextBar,
    homepageProductImage,
    homepageImageBar,
    homepageImageTextBar,

    navItem,
    navItemGroup,
    footerBlog,
    footerQuickLinks,
    layoutHeader,
    layoutFooter,
    layout,

    page,

  ]),
})
