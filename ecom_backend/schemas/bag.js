export default {
    name: 'bag',
    title:'Bag',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            
            name:'productsaved',
            title:'ProductSaved',
            type:'document',
            fields:[
                {
                    name:'name',
                    title:'Name',
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
                    type:'url',
                },
                {
                    name:'price',
                    title:'Price',
                    type:'number',
                },
              
                {
                    name:'color',
                    title:'Color',
                    type:'string',
                },
                {
                    name:'size',
                    title:'Size',
                    type:'string',
                },
                {
                    name:'quantity',
                    title:'Quantity',
                    type:'number',
                },
              

            ]
        },
        {
            name:'user',
            title:'User',
            type:'reference',
            to:[{type:'user'}]
        },
   
       
]


}