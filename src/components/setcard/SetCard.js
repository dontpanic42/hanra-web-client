export default {
    name: 'SetCard',
    props: {
        'id': {
            type: Number,
            required: true
        },

        'title': {
            type: String,
            required: true
        }, 
        
        'description': {
            type: String,
            required: false
        }
    },
    data: () => {
        return {}
    }
};
