import {defineField, defineType} from 'sanity'

export const widgetConfigType = defineType({
    name: 'widgetConfig',
    title: 'Widget Config',
    type: 'object',
    fields: [
        defineField({
            name: 'configType',
            type: 'string',
        }),
        defineField({
            name: 'overRidePriority',
            type: 'number',
            // could add a validation here to ensure there is only one number
            // could specify to the authors that the sort order will be the priority
        }),
        defineField({
            name: 'widgetName',
            type: 'string',
        }),
        defineField({
            name: 'showVenue',
            type: 'boolean',
        }),
        defineField({
            name: 'isAwayTeamFirst',
            type: 'boolean',
        }),

    ]
})