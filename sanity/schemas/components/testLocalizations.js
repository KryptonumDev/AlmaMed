export default {
  type: 'object',
  name: 'test_localization',
  title: 'Element listy',
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isClosed',
      type: 'boolean',
      title: 'Zamykany?',
    },
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
      ],
    },
  ],
}

export const list = {
  type: 'object',
  name: 'list',
  title: 'Lista',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Treść',
      of: [
        {
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}

export const paragraph = {
  type: 'object',
  name: 'paragraph',
  title: 'Paragraf',
  fields: [
    {
      name: 'content',
      type: 'markdown',
      title: 'Treść',
      validation: (Rule) => Rule.required(),
    },
  ],
}

export const link = {
  type: 'object',
  name: 'link',
  title: 'Link',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'string',
      title: 'Tekst',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'href',
      type: 'string',
      title: 'Link',
      validation: (Rule) => Rule.required(),
      description: 'Dla telefonów komórkowych dodaj prefix tel:, dla adresów email mailto:',
    },
  ],
}
