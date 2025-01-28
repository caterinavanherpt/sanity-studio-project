import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'pageType',
  title: 'Page Blocks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      options: {
        sanityCreate: {
          exclude: true
        },
      },
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionOne',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'sectionTwo',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'sectionThree',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'sectionFour',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})