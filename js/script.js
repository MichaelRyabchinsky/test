import { getData } from './fetchData.js'

const list = document.querySelector('.main')

getData(list).catch((e) => {
    console.log(e) 
})