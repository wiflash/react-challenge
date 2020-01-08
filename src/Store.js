import createStore from "unistore";

const initialState = {
    apiKey: "",
    email: "",
    password: "",
    fullname: "",
    username: "",
    loginKah: false,
    listNews: [],
    keyword: "",
    isLoading: true
};

export const store = createStore(initialState);

export const actions = store => ({
    handleInputChange: (state, event) => {
        return { [event.target.name]: event.target.value };
    },

    handleSetGlobal: (state, event) => {
        store.setState({ [event.target.name]: event.target.value });
    }
});