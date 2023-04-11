import TodoForm from "../TodoForm/TodoForm.js";
import { app, auth, database } from "../../firebaseConfig.js";
import {
  ref,
  onValue,
  push,
  remove,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";


export default function () {
    const contentContainer=document.querySelector(".content");
    const todoRef=ref(database,"todos/"+auth.currentUser.uid);

    const todoFormHandler=(event)=>{
        event.preventDefault();
        const todoText=document.getElementById("todo-input").value;
        push(todoRef, {todoText})
        .then(()=>console.log("Todo added"))
        .catch(()=>window.alert("Error! Todo not pushed"))
    }

    onValue(todoRef,(snapshot)=>{
        const data=snapshot.val();

        if (!data){
            contentContainer.innerHTML="";
            const todoForm=TodoForm();
            contentContainer.appendChild(todoForm);
            todoForm.addEventListener("submit",todoFormHandler);
        } else {
            const todos=Object.values(data);

            const todoTitle=document.createElement("h2");
                todoTitle.setAttribute("id","todo-title-list");
                todoTitle.innerHTML="Your current todos:"

            const listTodos=todos.map((el,i)=>{
                

                const li=document.createElement("li");
                li.setAttribute("id",`li-${i}`);

                const div=document.createElement("div");
                div.setAttribute("id",`div-${i}`)
                div.setAttribute("class","div-li")

                const span=document.createElement("span");
                span.textContent=`${el.todoText}`;

                const doneButton=document.createElement("button");
                doneButton.setAttribute("id",`done-button-${i}`);
                doneButton.setAttribute("class","done-button");
                doneButton.textContent="Done!"

                div.appendChild(span);
                div.appendChild(doneButton);
                li.appendChild(div);

                return li
            })

            const ul=document.createElement("ul");
            listTodos.forEach((el)=>ul.appendChild(el));
            contentContainer.innerHTML="";
            contentContainer.appendChild(TodoForm());
            contentContainer.appendChild(todoTitle)
            contentContainer.appendChild(ul);
            const todoForm=document.getElementById("todo-form");
            todoForm.addEventListener("submit",todoFormHandler);

            const doneButton=[...document.getElementsByClassName("done-button")]
            doneButton.forEach((el,i)=>{
                el.addEventListener("click", function (){
                    remove(
                        ref(
                            database,
                            `todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`))
                })
            })
            
        }
    })


}