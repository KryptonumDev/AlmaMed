export default {
  name: 'Cooperation',
  title: 'Współpraca',
  type: 'document',
  icon: () => `🤝`,
  fields: [
    // Hero
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf pod nagłówkiem',
      fieldset: 'hero',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Obraz',
      fieldset: 'hero',
      group: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'array',
      title: 'Przyciski',
      fieldset: 'hero',
      group: 'hero',
      of: [{type: 'cta'}],
    },

    // Intro
    {
      name: 'intro_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'intro',
      group: 'intro',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'intro_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'intro',
      group: 'intro',
      validation: (Rule) => Rule.required(),
    },

    // Groups
    {
      name: 'groups',
      type: 'array',
      title: 'Grupy współpracy',
      fieldset: 'groups',
      group: 'groups',
      of: [{type: 'cooperationGroup'}],
    },

    // Network
    {
      name: 'network_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'network',
      group: 'network',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'network_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'network',
      group: 'network',
      validation: (Rule) => Rule.required(),
    },

    // Form
    {
      name: 'form_Heading',
      type: 'markdown',
      title: 'Nagłówek formularza',
      fieldset: 'form',
      group: 'form',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'form_Paragraph',
      type: 'markdown',
      title: 'Paragraf formularza',
      fieldset: 'form',
      group: 'form',
    },
    {
      name: 'form_Img',
      type: 'image',
      title: 'Grafika formularza',
      fieldset: 'form',
      group: 'form',
    },
    {
      name: 'form_Subjects',
      type: 'array',
      title: 'Tematy wiadomości',
      fieldset: 'form',
      group: 'form',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'form_TargetEmail',
      type: 'string',
      title: 'Docelowy e-mail dla formularza',
      description: 'Adres, na który mają przychodzić zgłoszenia współpracy.',
      fieldset: 'form',
      group: 'form',
      validation: (Rule) => Rule.required().email(),
    },

    // FAQ
    {
      name: 'faq_heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'faq',
      group: 'faq',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'faq_list',
      type: 'array',
      title: 'Lista pytań',
      fieldset: 'faq',
      group: 'faq',
      of: [{type: 'faq_list_element'}],
    },

    // SEO
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  fieldsets: [
    {name: 'hero', title: 'Sekcja powitalna', options: {collapsible: true}},
    {name: 'intro', title: 'Wprowadzenie', options: {collapsible: true}},
    {name: 'groups', title: 'Grupy współpracy', options: {collapsible: true}},
    {name: 'network', title: 'Sekcja sieci placówek', options: {collapsible: true}},
    {name: 'form', title: 'Formularz', options: {collapsible: true}},
    {name: 'faq', title: 'FAQ', options: {collapsible: true}},
    {name: 'seo', title: 'SEO', options: {collapsible: true}},
  ],
  groups: [
    {title: 'Hero', name: 'hero'},
    {title: 'Intro', name: 'intro'},
    {title: 'Grupy', name: 'groups'},
    {title: 'Sieć', name: 'network'},
    {title: 'Formularz', name: 'form'},
    {title: 'FAQ', name: 'faq'},
    {title: 'SEO', name: 'seo'},
  ],
}
