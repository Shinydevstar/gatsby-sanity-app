export default {
    name: 'media',
    title: 'Media',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'video',
            title: 'Video',
            type: 'mux.video'
        },
        { title: "Media Title", name: "title", type: "string" },
        { title: "Media Instruction", name: "media_instruction", type: "string" },
        { title: "Media Link", name: "media_link", type: "url" },
        { 
            title: "Open in a new tab", 
            name: "new_tab", 
            type: "boolean",
            initialValue: false 
        },
        {
            title: "Change Media Allocation",
            name: "media_allocation",
            type: "string",
            options: {
                list: [
                { title: "Left", value: "left" },
                { title: "Right", value: "right" },
                ],
                layout: "radio",
                direction: "horizontal"
            },
            initialValue: "Left"
        },
    ]
}