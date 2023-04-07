const initialState = {
  filters: [],
  filtersLoadingStatus: 'idle',
  activeFilter: 'all',
};

const filtersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FILTERS_FETCHING':
      return {
        ...state,
        filtersLoadingStatus: 'loading',
      };
    case 'FILTERS_FETCHED':
      return {
        ...state,
        filters: payload,
        filtersLoadingStatus: 'idle',
      };
    case 'FILTERS_FETCHING_ERROR':
      return {
        ...state,
        filtersLoadingStatus: 'error',
      };
    case 'ACTIVE_FILTER_CHANGED':
      return {
        ...state,
        activeFilter: payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
