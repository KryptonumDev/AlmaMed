export default {
  name: 'services',
  title: 'Usługi',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Nazwa usługi',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'icon',
      type: 'image',
      title: 'Ikona usłgugi',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color usługi',
      options: {
        list: [
          {title: 'Zielony', value: 'green'},
          {title: 'Niebieski', value: 'blue'},
          {title: 'Żółty', value: 'yellow'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'green',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'have_page',
      type: 'boolean',
      title: 'Czy ma podstronę?',
      initialValue: false,
    }
  ],
  // fieldsets: [
  //   {
  //     name: 'social',
  //     title: 'Social links',
  //     options: {collapsible: true, collapsed: true},
  //   },
  // ],
}
