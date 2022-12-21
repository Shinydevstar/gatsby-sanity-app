export default {
    name: "homepageImageTextBar",
    title: "Homepage Image Text Bar",
    type: "document",
    fields: [
        { title: "Title", name: "title", type: "string" },
        { title: "Image Instruction", name: "image_instruction", type: "string" },
        {
            name: 'Image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            }
        },
        { title: "Heading", name: "heading", type: "string" },
        { title: "Sub Heading", name: "sub_heading", type: "string" },
    ],
}
  