const showAboutPage = (state) => {
    
    return {
        ...state,
        aboutPage: 
        !state.aboutPage,
    };
};

export default showAboutPage;