// Name reducer and action generators
// -----------------
export const nameReducer = (state = 'Anonymous', action) => {
  console.log('NAME_REDUCER');
  switch (action.type) {
    case 'CHANGE_NAME':
    console.log('SWITCH_CHANGE_NAME');
      return action.name;
    default:
      return state;
  }
};

// Hobbies reducer and action generators
// -----------------
let nextHobbyId = 1;
export const hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id != action.id)
    default:
      return state;
  }
};

// Movies reducer and action generators
// -----------------
let nextMovieId = 1;
export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie: action.movie,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id != action.id)
    default:
      return state;
  }
};

// https://www.google.com/maps?q=-30.026318,+-51.200609
// Map reducer and action generators
// -----------------
export const mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};