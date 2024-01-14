export default {
  name: 'PortableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'ImageColumn',
    },
    {
      type: 'TextAndImageColumn',
    },
    {
      type: 'QuickContact',
    },
    {
      type: 'HighlightedList',
    },
  ],
}
