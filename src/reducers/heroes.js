const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};

const heroesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: payload,
        heroesLoadingStatus: 'idle',
      };
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'HERO_CREATED':
      return {
        ...state,
        heroes: [...state.heroes, payload],
      };
    case 'HERO_DELETED':
      return {
        ...state,
        heroes: state.heroes.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default heroesReducer;
