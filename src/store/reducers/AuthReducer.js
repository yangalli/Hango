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
} from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  registerError: '',
  loginError: '',
  loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_EMAIL: 
      return { ...state, email: action.payload }
    case MODIFICA_SENHA:
      return { ...state, password: action.payload }
    case MODIFICA_NOME:
      return { ...state, name: action.payload }
    case CADASTRA_USUARIO_ERRO:
      return { ...state, registerError: action.payload, loading: false }
    case CADASTRA_USUARIO_SUCESSO:
      return { ...state, name: '', password: '', loading: false }
    case LOGIN_USUARIO_ERRO:
      return { ...state, loginError: action.payload, loading: false }
    case LOGIN_ANDAMENTO:
      return { ...state, loading: true }
    case CADASTRO_ANDAMENTO:
      return { ...state, loading: true }
    default:
      return state;
  }
}

export default reducer;