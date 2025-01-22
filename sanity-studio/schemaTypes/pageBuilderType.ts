import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageBuilderType = defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'assets',
      title: 'Images',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    //   validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
    //   validation: (rule) => rule.required(),
    }),


    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
      readOnly: ({currentUser}) => {
        const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')
    
        return !isAdmin
      },
    }),



    defineField({
        name: 'summary',
        type: 'string',
        validation: rule => [
            rule.required().min(10).error('A title of min. 10 characters is required'),
            rule.max(50).warning('Shorter titles are usually better')
          ]
      }),
      defineField({
        name: 'definition',
        type: 'string',
        validation: rule => 
          rule.required().info('This field is important for...')
      }),
    defineField({
      name: 'pageSections',
      type: 'array',
      of: [ defineArrayMember({ type: 'section' }),],
    }),
    defineField({
        type: 'document',
        name: 'myDocument',
        fields: [
            {
                type: 'markdown',
                description: 'A Github flavored markdown field with image uploading',
                name: 'bio',
            }
        ]
    }),
    defineField({
        name: 'isHighlighted',
        type: 'boolean'
    }),
    defineField({
      name: 'seoType', 
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'imageTest',
      type: 'image',
      group: 'assets',
    }),
  ],
  initialValue: {
    isHighlighted: true
  }
})