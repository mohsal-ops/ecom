import {v4 as uuidv4} from 'uuid'
export default {
    name :'product',
    title : 'Product',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name:'gender',
            title:'Gender',
            type:'string',  
        },
        {
            name:'description',
            title:'Description',
            type:'string',
        },
        {
            name:'image',
            title:'Image',
            type:'image',
        },
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        {
            name:'review',
            title:'Review',
            type:'array',
            of:[{type:'review'}],
        },
        {
            name:'color',
            title:'Color',
            type:'array',
            of:[{type:'string'}],
        },
        {
            name:'imageArray',
            title:'ImageArray',
            type:'array',
            of:[{type : 'image'}],
        },
    ]
}