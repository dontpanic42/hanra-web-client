import { mapMutations } from "vuex";
import types from "../../store/types";

export default {
    name: 'HanziText',
    props: {
        'text': {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapMutations({
            'showCharacter': types.SOM_SET_SHOW_CHARACTER
        }),
        
        isHanCharacter(char) {
            return /\p{Script=Han}/u.test(char);
        }
    }
};
