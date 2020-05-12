function reducer(state, action) {
    switch (action.type) {
        case '1':
            return { evenKey0: !state.evenKey0 };
        case '2':
            return { evenKey1: !state.evenKey1 };
        case '3':
            return { evenKey2: !state.evenKey2 };
        case '4':
            return { evenKey3: !state.evenKey3 };
        case '5':
            return { evenKey4: !state.evenKey4 };
        case '6':
            return { evenKey5: !state.evenKey5 };
        default:
            throw new Error();
    }
}
export default reducer;