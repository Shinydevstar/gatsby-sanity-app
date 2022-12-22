export default {
    name: 'layoutHeader',
    type: 'object',
    title: 'Layout Header',
    fields: [
        {
            name: 'logoImage',
            title: 'Logo Image',
            type: 'image',
            options: {
              hotspot: true,
            }
        },
        {
            title: "Nav Items",
            name: "navItems",
            type: "array",
            of: [
                {
                    type: "navItem",
                },
            ],
        },
    ]
}