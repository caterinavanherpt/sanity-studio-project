import {defineField, defineType} from 'sanity'

export const tagType = defineType({
    name: 'tagType',
    title: 'Tag',
    type: 'document',
    fields: [
      defineField({
        name: 'tag',
        type: 'string',
      }),
    ],
})