export default {
    setVisible(state, val) {
        state.isVisible = val;
    },

    showCharacter(state, char) {
        state.character = char;
        state.isVisible = true;
    }
}