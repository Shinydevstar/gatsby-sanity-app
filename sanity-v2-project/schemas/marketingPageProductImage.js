export default {
    name: 'productImage',
    title: 'Product Image',
    type: 'object',
    fields: [
        { title: "Title", name: "title", type: "string" },
        { title: "Date", name: "date", type: "string" },
        { title: "Media Information", name: "media_info", type: "string" },
        {
        name: 'video',
        title: 'Video',
        type: 'mux.video',
        options: {
            hotspot: true,
            fullscren: true
        }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        { title: "Media Link", name: "media_link", type: "url" },
        { 
            title: "Open in a new tab", 
            name: "new_tab", 
            type: "boolean",
            initialValue: false 
        },
    ],
}