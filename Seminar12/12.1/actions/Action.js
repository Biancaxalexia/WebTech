//Exemplu + Exercitiu
/*export function addNote (content) {
  console.warn(content)
  return {
    type: 'ADD_NOTE',
    payload: content
  }
}
export function deleteNote (index) {
  return {
    type: 'DELETE_NOTE',
    payload: index
  }
}*/

const SERVER = 'http://localhost:8080'

export function getNotes () {
  return {
    type: 'GET_NOTES',
    payload: async () => {
      const response = await fetch(`${SERVER}/notes`)
      const data = await response.json()
      return data
    }
  }
}

export function deleteNote (id) {
  return async (dispatch) => {
    dispatch({ type: 'DELETE_NOTE_PENDING' })
    try {
      await fetch(`http://localhost:3000/notes/${id}`, {
        method: 'DELETE'
      })
      dispatch({
        type: 'DELETE_NOTE_FULFILLED',
        payload: id
      })
    } catch (error) {
      dispatch({
        type: 'DELETE_NOTE_REJECTED',
        payload: error
      })
    }
  }
}