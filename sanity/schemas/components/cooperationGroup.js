import removeMarkdown from '../../utils/removeMarkdown'

export default {
  name: 'cooperationGroup',
  title: 'Grupa współpracy',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'markdown',
      title: 'Treść',
      description: 'Wspiera markdown (listy, pogrubienia, akapity).',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Ikona / grafika (opcjonalnie)',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'img',
    },
    prepare({title, media}) {
      return {
        title: removeMarkdown(title),
        media,
      }
    },
  },
}
