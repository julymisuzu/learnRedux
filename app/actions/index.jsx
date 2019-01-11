import axios from 'axios';

export const changeName = (name) => {
  console.log('CHANGE_NAME');
  return {
    type: 'CHANGE_NAME',
    name
  }
};

export const addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};
export const removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};

export const addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  }
};
export const removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

export const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

export const completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

export const fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('https://ipinfo.io').then(function (res) {
      const location = res.data.loc;
      const baseUrl = 'https://maps.google.com?q=';

      dispatch(completeLocationFetch(baseUrl + location));
    });
  };
};