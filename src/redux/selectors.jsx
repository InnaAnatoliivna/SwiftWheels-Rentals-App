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

export const selectFilterMakes = state => state.filter.makes;
export const selectFilterPrices = state => state.filter.prices;
export const selectFilterMileages = state => state.filter.mileages;

// modal

export const selectIsOpenModal = state => state.modal.isOpen;