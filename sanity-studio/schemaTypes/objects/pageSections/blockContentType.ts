import {defineField, defineType} from 'sanity'

export const blockContentType = defineType({
  name: 'blockContentType',
  title: 'Block Content',
  type: 'object',
  fields: [
    defineField({
        name: 'section',
        type: 'array',
        of: [{type: 'block'}],
      }),
  ],
})