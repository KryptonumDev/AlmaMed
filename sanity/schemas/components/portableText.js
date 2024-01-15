export const ImageColumn = {
  name: 'ImageColumn',
  title: 'Obrazki w 2 kolumnach',
  type: 'object',
  fields: [
    {
      name: 'list',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          type: 'image',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      list: 'list',
    },
    prepare({list}) {
      return {
        title: `[ImageColumn] - ${list.length} images`,
        media: list[0],
      }
    },
  },
}

export const Cta = {
  name: 'Cta',
  title: 'CTA',
  type: 'object',
  fields: [
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'cta',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      links: 'links',
    },
    prepare({links}) {
      let titles = links.map(el => el.text)
      // show all titles
      return {
        title: `[Cta] - ${titles.join(', ')}`,
      }
    },
  },
}