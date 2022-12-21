export default {
    name: 'product_image',
    title: 'Product Image',
    type: 'document',
    fields: [
        { title: "Title", name: "title", type: "string" },
        { title: "Date", name: "date", type: "string" },
        { title: "Image Information", name: "image_info", type: "string" },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}