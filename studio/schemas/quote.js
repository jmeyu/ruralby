export default {
  title: 'Quote',
  name: 'quote',
  type: 'document',
  fields: [
    {
      name: 'category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      title: 'Body',
      name: 'body',
      type: 'markdown',
      // spellCheck: true,
    },
    {
      name: 'date',
      type: 'date',
      initialValue: () => {
        const date = new Date()
        return `${date.getFullYear().toString().padStart(4, '0')}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      },
    },
  ],
}
