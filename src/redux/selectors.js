export const contactsSelector = state => state.contacts.contacts.items;
export const loadingSelector = state => state.contacts.contacts.isLoading;
export const filterSelector = state => state.filter.filter;
export const tokenSelector = state => state.auth.token;
export const userSelector = state => state.auth.profile;
export const isLoggedSelector = state => state.auth.isLoggedIn;
