const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type == 'MODIFICA_EMAIL') {
    return { ...state, email: action.payload }
  }
  if (action.type == 'MODIFICA_SENHA') {
    return { ...state, password: action.payload }
  }
  if (action.type == 'MODIFICA_NOME') {
    return { ...state, name: action.payload }
  }
  return state;
}

export default reducer;