
const sanityBlockContentToHTML = require("@sanity/block-content-to-html")

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "blocktype",
    extend(options) {
      return {
        resolve(source) {
          // capitalize
          const type = source._type
          const cap = type.charAt(0).toUpperCase() + type.slice(1)
          return cap
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "sanityBlockContent",
    args: {
      fieldName: "String",
    },
    extend(options) {
      return {
        resolve(source) {
          const html = sanityBlockContentToHTML({
            blocks: source[options.fieldName],
          })
          return html
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "navItemType",
    args: {
      name: {
        type: "String!",
        defaultValue: "Link",
      },
    },
    extend(options) {
      return {
        resolve() {
          switch (options.name) {
            case "Group":
              return "Group"
            default:
              return "Link"
          }
        },
      }
    },
  })

  // abstract interfaces
  actions.createTypes(/* GraphQL */ `
    interface HomepageBlock implements Node {
      id: ID!
      blocktype: String
    }

    interface HomepageLink implements Node {
      id: ID!
      href: String
      text: String
    }

    interface HeaderNavItem implements Node {
      id: ID!
      navItemType: String
    }

    interface NavItem implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      href: String
      text: String
      icon: HomepageImage
      description: String
    }

    interface NavItemGroup implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      name: String
      navItems: [NavItem]
    }

    interface HomepageImage implements Node {
      id: ID!
      alt: String
      gatsbyImageData: GatsbyImageData
      url: String
    }

    interface HomepageHero implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String!
      sub_heading: String
      image: HomepageImage
    }

    interface HomepageTopTextBar implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      sub_heading: String
    }

    interface HomepageBottomTextBar implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      sub_heading: String
    }

    interface HomepageImageTextBar implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      title: String
      heading: String
      sub_heading: String
      image: HomepageImage
      image_instructions: String
      links: [HomepageLink]
    }

    interface HomepageImageBar implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      content: [HomepageProductImage]
    }

    interface HomepageProductImage implements Node {
      id: ID!
      title: String
      Date: String
      image_info: String
      image: HomepageImage
    }


    interface Homepage implements Node {
      id: ID!
      title: String
      description: String
      content: [HomepageBlock]
    }

    interface LayoutHeader implements Node {
      id: ID!
      navItems: [HeaderNavItem]
      cta: HomepageLink
    }

    interface LayoutFooter implements Node {
      id: ID!
      quickLinks: [FooterQuickLinks]
      blog: [FooterBlog]
      copyright: String
    }

    interface Layout implements Node {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    interface FooterQuickLinks implements Node {
      id: ID!
      text: String
      href: String
    }

    interface FooterBlog implements Node {
      id: ID!
      text: String
      href: String
    }

    interface Page implements Node {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage
      html: String!
    }
  `)

  // CMS-specific types for Homepage
  actions.createTypes(/* GraphQL */ `
    type SanityHomepageLink implements Node & HomepageLink {
      id: ID!
      href: String
      text: String
    }

    type SanityImageAsset implements Node & HomepageImage {
      id: ID!
      alt: String @proxy(from: "altText")
      gatsbyImageData: GatsbyImageData
      url: String
    }

    type SanityHomepage implements Node & Homepage {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      content: [HomepageBlock] @link
    }

    type SanityHomepageHero implements Node & HomepageHero & HomepageBlock {
      id: ID!
      _type: String
      blocktype: String @blocktype
      heading: String!
      sub_heading: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
    }

    type SanityHomepageTopTextBar implements Node & HomepageTopTextBar & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      sub_heading: String
    }

    type SanityHomepageBottomTextBar implements Node & HomepageBottomTextBar & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      sub_heading: String
    }

    type SanityHomepageImageTextBar implements Node & HomepageImageTextBar & HomepageBlock {
      id: ID!
      blocktype: String
      title: String
      heading: String
      sub_heading: String
      image: HomepageImage
      image_instructions: String
      links: [HomepageLink]
    }

    type SanityHomepageImageBar implements Node & HomepageImageBar & HomepageBlock {
      id: ID!
      blocktype: String
      content: [HomepageProductImage]
    }

    type SanityHomepageProductImage implements Node & HomepageProductImage {
      id: ID!
      title: String
      Date: String
      image_info: String
      image: HomepageImage
    }

    type SanityNavItem implements Node & NavItem & HeaderNavItem {
      id: ID!
      navItemType: String @navItemType(name: "Link")
      href: String
      text: String
      icon: HomepageImage @link(by: "id", from: "icon.asset._ref")
      description: String
    }

    type SanityNavItemGroup implements Node & NavItemGroup & HeaderNavItem {
      id: ID!
      navItemType: String @navItemType(name: "Group")
      name: String
      navItems: [NavItem] @link
    }

    type SanityLayoutHeader implements Node & LayoutHeader {
      id: ID!
      navItems: [HeaderNavItem] @link(from: "navItems._ref")
      cta: HomepageLink @link
    }

    type SanityFooterQuickLinks implements Node & FooterQuickLinks {
      id: ID!
      href: String
      text: String
    }

    type SanityFooterBlog implements Node & FooterBlog {
      id: ID!
      href: String
      text: String
    }

    type SanityLayoutFooter implements Node & LayoutFooter {
      id: ID!
      quickLinks: [FooterQuickLinks] @link
      blog: [FooterBlog] @link
      copyright: String
    }

    type SanityLayout implements Node & Layout {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    type SanityPage implements Node & Page {
      id: ID!
      slug: String! @proxy(from: "slug.current")
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      html: String! @sanityBlockContent(fieldName: "content")
    }
  `)
}

exports.createPages = ({ actions }) => {
  const { createSlice } = actions
  createSlice({
    id: "header",
    component: require.resolve("./src/components/header"),
  })
  createSlice({
    id: "footer",
    component: require.resolve("./src/components/footer"),
  })
}
      