import React from 'react'

export default {
  name: 'PortableText',
  type: 'array',
  title: 'Treść',
  of: [
    {
      type: 'block',
      styles: [
        {
          title: 'Tekst zwykły',
          value: 'normal',
          component: ({children}: {children: React.ReactNode}) => (
            <span style={{fontWeight: 400}}>{children}</span>
          ),
        },
        {
          title: 'Nagłówek',
          value: 'h2',
          component: ({children}: {children: React.ReactNode}) => (
            <h2 style={{fontSize: '1.8em', margin: 0}}>{children}</h2>
          ),
        },
        {
          title: 'Nagłówek pomniejszony',
          value: 'h3',
          component: ({children}: {children: React.ReactNode}) => (
            <h3 style={{fontSize: '1.3em', margin: 0}}>{children}</h3>
          ),
        },
        {title: 'Quote', value: 'blockquote'},
      ],
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                initialValue: 'https://',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Tekst alternatywny',
          description: 'Tekst zastępczy dla ludzi niewidomych.',
          validation: (Rule: {warning: () => any}) => Rule.warning(),
        },
      ],
    },
    {
      type: 'ImageColumn',
    },
    {
      type: 'Cta'
    }
  ],
}
