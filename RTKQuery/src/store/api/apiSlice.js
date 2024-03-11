import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const todosApi=createApi({
    reducerPath:'todos',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3501/'}),
    endpoints:(builder)=>({
        getTodos:builder.query({
            providesTags:['Todos'],
            query:()=>'/todos'
        }),
        addTodo:builder.mutation({
            invalidatesTags:['Todos'],
            
            query:(todo)=>{
                return {
                    url:'/todos',
                    method:'POST',
                    body:todo
                }
            }
        }),
        deleteTodo:builder.mutation({
            invalidatesTags:['Todos'],
            query:({id})=>{
                console.log('delete todo called',id)
                return {
                    url:`/todos/${id}`,
                    method:"DELETE",
                    body:id
                }
            }
        })

    })
})

export const {useGetTodosQuery,useAddTodoMutation,useDeleteTodoMutation}=todosApi