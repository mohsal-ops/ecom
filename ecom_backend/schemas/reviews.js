export default {
    name:'review',
    title:'Review',
    type:'document',
    fields:[
        {
            name:'postedBy',
            title:'PostedBy',
            type :'reference',
            to :[{type:'user'}]

        },
        {
            name:'stars',
            title:'Stars',
            type :'number',
            validation : Rule => Rule.min(0).max(5)
           

        },
        {
            name:'review',
            title:'Review',
            type:'string'

        }
    ]

}