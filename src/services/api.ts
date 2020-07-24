import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:4040/dev/todolist"
})

export default api