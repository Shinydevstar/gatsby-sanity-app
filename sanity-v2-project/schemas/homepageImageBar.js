export default {
    name: "homepageImageBar",
    title: "Homepage Image Bar",
    type: "document",
    fields: [
        {
            name: 'Image',
            title: 'Image',
            type: 'array',
            of: [
                {
                    type: "reference",
                    to: [{ type: "product_image" }],
                },
            ],
        },
    ],
}