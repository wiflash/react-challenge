import createStore from "unistore";

const initialState = {
    apiKey: "",
    email: "",
    username: "",
    password: "",
    fullname: "",
    loginKah: false,
    listNews: [],
    sideListNews: [],
    keyword: "",
    loadingKah: true,
    sideLoadingKah: true
};

export const store = createStore(initialState);

export const actions = store => ({
    handleSetGlobal: (state, event) => {
        store.setState({ [event.target.name]: event.target.value });
    }

    // handleKategori: (state, event) => {

    // }

    // handleSearch: (state, event) => {
        
    // }
});