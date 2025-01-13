import {defineField, defineType} from 'sanity'

export const sectionType = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
        name: 'section',
        type: 'array',
        of: [{type: 'block'}],
      }),
  ],
})