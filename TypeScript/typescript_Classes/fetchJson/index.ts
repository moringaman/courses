import axios from 'axios';

const API_URL:string = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo  {
    id: number;
    title: string;
    complete: boolean;
}

axios.get(API_URL).then((response) => {
    const todo = response.data as Todo

    const id = todo.id
    const title = todo.title
    const complete = todo.complete

    logTodo(title,  complete, id )
   
})

const logTodo = (title:string, complete:boolean, id:number) => {
    console.log(`
    The todo with title: ${title}
    has an id of: ${id}
    ${complete === true ? "is finished" : "its not finished"}
    `)
}