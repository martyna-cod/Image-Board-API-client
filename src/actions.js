import request from 'superagent';
export const NEW_IMAGE = 'NEW_IMAGE'

export const ALL_IMAGES = 'ALL_IMAGES';

const baseUrl = 'http://localhost:4000'

export default function allImages (payload) {
  return {
    type: ALL_IMAGES,
    payload
  }
}
// pobietam wszystke zdj, triggeruje akcje, 
export const getImages = () => (dispatch, getState) => {
  const state = getState()
  const { images } = state

  if (!images.length) { // jesli nie ma zadnych obrazkow to wysylam request do mojego url, 
    // po czym dostaje odpowiedz od body w postaci akcji AllImages, ktora jest od razu trigerrowana do reducera
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}



function newImage (payload) {
  return {
    type: NEW_IMAGE,
    payload
  }
}

{/*export const createImage = data => dispatch => { // I wanna do post req to my localhost:4000/image
  request
    .post(`${baseUrl}/image`)                 // so i post it, I send thede data and then I get 
    .send(data)                               // response NewImage which is standard action
    .then(response => {
      const action = newImage(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

*/}
export const createImage = data => (dispatch, getState) => {
  const state = getState()
  const { user } = state

  request
    .post(`${baseUrl}/image`)
    .set('Authorization', `Bearer ${user}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

export const JWT = 'JWT';

function jwt(payload) {
    return {
        type: JWT,
        payload
    };
}

export const login = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(response => {
            const action = jwt(response.body.jwt);

            dispatch(action);
        });
};