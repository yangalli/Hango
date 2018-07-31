import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRA_USUARIO_ERRO,
  CADASTRA_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_ANDAMENTO,
  CADASTRO_ANDAMENTO
} from './actionTypes';

export const modifyEmail = (text) => {
  return {
    type: MODIFICA_EMAIL,
    payload: text
  }
}

export const modifyPassword = (text) => {
  return {
    type: MODIFICA_SENHA,
    payload: text
  }
}

export const modifyName = (text) => {
  return {
    type: MODIFICA_NOME,
    payload: text
  }
}

export const registerUser = (name, email, password) => {
  return dispatch => {

    dispatch({ type: CADASTRO_ANDAMENTO });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        let emailB64 = b64.encode();
        firebase.database().ref(`/users/${emailB64}`)
          .push({ name })
          .then(value => registerUserSuccess(dispatch))
      })
      .catch(error => registerUserError(error, dispatch)
    );
  }
}

const registerUserSuccess = (dispatch) => {
  dispatch({ type: CADASTRA_USUARIO_SUCESSO });
  Actions.homePage();
}

const registerUserError = (error, dispatch) => {
  dispatch ({ 
    type: CADASTRA_USUARIO_ERRO,
    payload: error.message
  })
}

export const authenticateUser = (email, password) => {
  return dispatch => {
    
    dispatch({ type: LOGIN_ANDAMENTO });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => loginUserSuccess(dispatch))
      .catch(error => loginUserError(error, dispatch)
    );
  }
}

const loginUserSuccess = (dispatch) => {
  dispatch({ type: LOGIN_USUARIO_SUCESSO })
  Actions.landingPage(); 
}

const loginUserError = (error, dispatch) => {
  dispatch({ 
    type: LOGIN_USUARIO_ERRO,
    payload: error.message
  }) 
}