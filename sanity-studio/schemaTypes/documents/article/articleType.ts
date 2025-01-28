import {defineField, defineType, defineArrayMember} from 'sanity'

export const articleType = defineType({
    name: 'articleType',
    title: 'Article',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
      }),
      defineField({
        name: "slug",
        type: "slug",
        options: {
          source: "title",
        },
      }),
      defineField({
        name: 'tags',
        type: 'array',
        of: [ defineArrayMember({ type: 'reference', to: [{type: 'tagType'}]})],
      })
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "slug.current",
      },
    },
})