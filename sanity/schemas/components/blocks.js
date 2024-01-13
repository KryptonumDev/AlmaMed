export default {
  type: 'object',
  name: 'blocks',
  title: 'Element listy',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Treść',
      of: [
        {
          type: 'list',
        },
        {
          type: 'paragraph',
        },
        {
          type: 'link',
        },
        {
          type: 'icon'
        },
      ],
    },
  ],
}

export const icon = {
  type: 'object',
  name: 'icon',
  title: 'Ikona',
  fields: [
    {
      type: 'image',
      name: 'icon',
      title: 'Ikona',
      validation: (Rule) => Rule.required(),
    },
  ],
}