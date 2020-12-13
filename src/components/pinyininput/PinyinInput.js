const pinyinRegex = /[aeiouüAEIOUÜ][1234]/g;
const pinyinLookup = {
    1: { a: 'ā', e: 'ē', i: 'ī', o: 'ō', u:'ū', ü: 'ǖ', A: 'Ā', E: 'Ē', I: 'Ī', O: 'Ō', U: 'Ū',  Ü: 'Ǖ'},
    2: { a: 'á', e: 'é', i: 'í', o: 'ó', u:'ú', ü: 'ǘ', A: 'Á', E: 'É', I: 'Í', O: 'Ó', U: 'Ú',  Ü: 'Ǘ'},
    3: { a: 'ǎ', e: 'ě', i: 'ǐ', o: 'ǒ', u:'ǔ', ü: 'ǚ', A: 'Ǎ', E: 'Ě', I: 'Ǐ', O: 'Ǒ', U: 'Ǔ',  Ü: 'Ǚ'},
    4: { a: 'à', e: 'è', i: 'ì', o: 'ò', u:'ù', ü: 'ǘ', A: 'À', E: 'È', I: 'Ì', O: 'Ò', U: 'Ù',  Ü: 'Ǜ'},
}

export default {
    name: 'PinyinInput',
    props: {
        modelValue: {
            type: String
        }
    },
    emits: [
        'update:modelValue'
    ],
    data: () => {
        return {
            formatedValue: ''
        }
    },
    watch: {
        modelValue(newValue) {
            if(this.formatedValue != newValue) {
                this.formatedValue = this.format(newValue, 0).str;
            }
        }
    },
    methods: {
        format(str, cursorPos) {
            str = (str || String()).normalize();

            const befCursorMatch = str.substring(0, cursorPos).match(pinyinRegex) || [];
            const aftCursorMatch = str.substring(cursorPos).match(pinyinRegex) || [];

            const result = [...befCursorMatch, ...aftCursorMatch].reduce((prev, cur) => {
                return prev.replace(cur, pinyinLookup[cur[1]][cur[0]])
            }, str);
            
            // Correct the cursor position for the formatting change
            cursorPos -= befCursorMatch.length;

            return {
                str: result,
                cursorPos: cursorPos
            };
        },

        handleInput(e) {
            const cursorPos = e.target.selectionStart;
            const str = e.target.value;
            const result = this.format(str, cursorPos);
            this.formatedValue = result.str;

            this.$emit('update:modelValue', this.formatedValue);

            // Setting the value resets the cursor, so we need to update it after the value was set
            setTimeout(() => {
                e.target.setSelectionRange(result.cursorPos, result.cursorPos);
            });
        }
    },
    computed: {
    }
};
