export default {
    name: 'CardListItem',
    props: {
        'card': {
            type: Object,
            required: true
        }
    },
    emits: [
        'deleteCard'
    ],
    data: function() {
        return {
            isExpanded: false
        }
    },
    methods: {
        toggleVisible() {
            this.isExpanded = !this.isExpanded;
        },

        deleteCard() {
            const confirmation = confirm('Bist du sicher das du diese Karte löschen willst? Sämtlicher Lernvortschritt für diese Karte geht dabei verloren.');
            if(confirmation) {
                this.$emit('deleteCard', this.card)
            }
        }
    }
};