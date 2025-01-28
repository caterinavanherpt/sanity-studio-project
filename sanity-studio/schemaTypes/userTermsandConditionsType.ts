import {defineField, defineType} from 'sanity'


export const user_terms_and_conditions_type = defineType({
    name: "userTermsAndConditions",
    title: "Terms and Conditions",
    type: "document",
    groups: [
        {name: 'details', title: 'Document Details'},
        {name: 'content', title: 'Document Content'},
        {name: 'release', title: 'Release Details'}
    ],
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            group: 'details',
            validation: (rule) => rule
                .required()
                .error('Document name is required')
        }),
        defineField({
            name: 'product',
            type: 'string',
            // to: [{type: 'product'}],
            group: 'details',
            validation: (rule) => rule
                .required()
                .error('Product is required')
        }),
        defineField({
            name: 'region',
            type: 'string',
            // to: [{type: 'region'}],
            group: 'details',
            validation: (rule) => rule
                .required()
                .error('Terms and Conditions region is required')
        }),
        defineField({
            name: 'date',
            type: 'date',
            group: 'details',
            validation: (rule) => rule
                .required()
                .error('Estimated release date of the terms and conditions is required')
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            group: 'details',
            options: {source: doc => `${doc.date}`}
        }),
        defineField({
            name: "content",
            type: 'array',
            group: 'content',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'releaseNotes',
            type: 'array',
            group: 'release',
            of: [{type: 'block'}]
        })
    ]
})