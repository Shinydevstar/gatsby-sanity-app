export default {
    name: 'metaData',
      title: 'MetaData',
      type: 'object',
      fields: [
        { title: "Title", name: "title", type: "string" },
        { title: "Description", name: "description", type: "text" },    
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
        },
        {
          title: "Content",
          name: "content",
          type: "array",
          of: [{ type: "block" }],
        },
    ]
}