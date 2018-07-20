export const modifyEmail = (text) => {
  return {
    type: 'MODIFICA_EMAIL',
    payload: text
  }
}

export const modifyPassword = (text) => {
  return {
    type: 'MODIFICA_SENHA',
    payload: text
  }
}

export const modifyName = (text) => {
  return {
    type: 'MODIFICA_NOME',
    payload: text
  }
}