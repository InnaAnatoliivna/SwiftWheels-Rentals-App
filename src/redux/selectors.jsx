// contactsSlice

export const selectAdverts = state => state.adverts.items;
export const selectErrorAdverts = state => state.adverts.error;
export const selectLoadingAdverts = state => state.adverts.isLoading;

export const selectCurrentPage = state => state.adverts.currentPage;
export const selectPerPage = state => state.adverts.perPage;

// favorities

export const selectFavorities = state => state.favorities.items;
export const selectFavoritiesID = state => state.favorities.favorities;

// filterSlice

export const selectFilter = state => state.filter;


// pagination

// export const selectCurrentPage = state => state.pagination.currentPage;
// export const selectPerPage = state => state.pagination.perPage;

// modal

export const selectIsOpenModal = state => state.modal.isOpen;