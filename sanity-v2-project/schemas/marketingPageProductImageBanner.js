export default {
    name: "marketingPageProductImageBanner",
    title: "MarketingPage Product Image Banner",
    type: "object",
    fields: [
        {
            name: 'media',
            title: 'Image/Video',
            type: 'array',
            of: [
                {
                  type: "productImage",
                },
            ],
        },
    ],
}