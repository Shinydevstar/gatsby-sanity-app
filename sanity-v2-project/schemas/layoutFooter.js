export default {
    name: "layoutFooter",
    title: "Layout Footer",
    type: "document",
    fields: [
        {
            title: "Quick Links",
            name: "quickLinks",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "footerQuickLinks" }],
                },
            ],
        },
        {
            title: "Blog",
            name: "blog",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "footerBlog" }],
                },
            ],
        },
        { title: "Copyright", name: "copyright", type: "string" },
    ],
}
  