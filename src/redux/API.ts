import axios from 'axios'
import { Joke, JokeEntries } from '../types'


const baseUrl =import.meta.env.VITE_BASE_URL
export const getJokes=(page:number) =>axios.get(baseUrl+`/jokes/?\_page=${page}&\_limit=5`)
export const addJoke=(formData:JokeEntries) =>axios.post(baseUrl+"/jokes", formData)
export const updateJoke=(formData:JokeEntries,id:number | undefined) =>axios.patch(baseUrl+ `${id}`, formData)