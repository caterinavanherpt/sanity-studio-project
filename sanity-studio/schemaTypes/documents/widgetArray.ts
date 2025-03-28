import {defineArrayMember, defineField, defineType} from 'sanity'

export const widgetArrayType = defineType({
    name: 'widgetArray',
    title: 'Widget Array',
    type: 'document',
    fields: [
        defineField({
           name: 'widgetName',
           type: 'string', 
        }),
        defineField({
            name: 'customer',
            type: 'string',
        }),
        defineField({
            name: 'widget',
            type: 'array',
            of: [
                defineArrayMember({ type: 'widgetConfig'})
            ]
        }),
    ]
})