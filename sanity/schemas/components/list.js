import removeMarkdown from "../../utils/RemoveMarkdown"

export const titleAndDescription = {
  name: "list_TitleAndDescription",
  title: "Tytuł i opis",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}

export const titleAndImage = {
  name: "list_TitleAndImage",
  title: "Tytuł i obrazek",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Obrazek',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img'
    },
    prepare({ title, media }) {
      return {
        title: removeMarkdown(title),
        media
      }
    }
  }
}

export const imageAndLink = {
  name: "list_ImageAndLink",
  title: "Tytuł, obrazek i przycisk",
  type: "object",
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tytuł',
    },
    {
      name: 'href',
      type: 'string',
      title: 'Przycisk (opcjonalny)',
      description: 'Relatywny lub absolutny link (https://)',
      validation: Rule => Rule.custom(value => {
        if (value && !value.startsWith('/') && !value.startsWith('https://') && !value.startsWith('#')) {
          return 'Incorrect URL.';
        }
        return true;
      }),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Obrazek',
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'img'
    },
    prepare({ name, media }) {
      return {
        title: name,
        media
      }
    }
  }
}

export const titleDescriptionAndImage = {
  name: "list_TitleDescriptionAndImage",
  title: "Tytuł, opis i obrazek",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Obrazek',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'img'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media
      }
    }
  }
}