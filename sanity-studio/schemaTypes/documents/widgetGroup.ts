import {defineArrayMember, defineField, defineType} from 'sanity'

export const widgetGroupType = defineType({
    name: 'widgetGroup',
    title: 'Widget Group',
    type: 'document',
    groups: [
        {name: 'defaultConfig'},
        {name: 'countryOverride'},
        {name: 'regionOverride'},
        {name: 'sportOverride'},
        {name: 'competitionOverride'}
    ],
    fieldsets: [
        {name: 'configSelections', title: 'Config Selections'}
    ],
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
            name: 'countryOverride',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            },
            fieldset: 'configSelections'
        }),
        defineField({
            name: 'regionOverride',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            },
            fieldset: 'configSelections'
        }),
        defineField({
            name: 'defaultConfig',
            type: 'widgetConfig',
            group: 'defaultConfig' 
        }),
        defineField({
            name: 'countryOverrideConfig',
            type: 'widgetConfig',
            group: 'countryOverride',
            hidden: ({ document }) => document?.countryOverride !== true,
        }),
        defineField({
            name: 'regionOverrideConfig',
            type: 'widgetConfig',
            group: 'regionOverride',
            hidden: ({ document }) => document?.regionOverride !== true,

        }),
        // defineField({
        //     name: 'sportOverrideConfig',
        //     type: 'widgetConfig',
        //     group: 'sportOverride'
        // }),
        // defineField({
        //     name: 'competitionOverrideConfig',
        //     type: 'widgetConfig',
        //     group: 'competitionOverride'
        // }),
    ]
})