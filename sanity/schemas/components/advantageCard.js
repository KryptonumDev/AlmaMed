export default {
  type: 'object',
  name: 'advantageCard',
  title: 'Karta wyróżnika',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Treść',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      description: 'Relative or absolute link (https://)',
      validation: Rule => Rule.custom(value => {
        if (value && !value.startsWith('/') && !value.startsWith('https://') && !value.startsWith('#')) {
          return 'Incorrect URL.';
        }
        return true;
      }),
    }
  ],
}
