export default {
    name: "layoutFooter",
    title: "Layout Footer",
    type: "object",
    fields: [
        {
            title: "Quick Links",
            name: "quickLinks",
            type: "array",
            of: [
                {
                    type: "footerQuickLinks",
                },
            ],
        },
        {
            title: "Blog",
            name: "blog",
            type: "array",
            of: [
                {
                    type: "footerBlog",
                },
            ],
        },
        { title: "Copyright", name: "copyright", type: "string" },
    ],
}
  