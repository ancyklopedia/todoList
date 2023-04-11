export default function () {
    const title=document.createElement("h2");
    title.innerHTML="Add your todo:"
    title.setAttribute("id","todo-form-title");

    const todoForm=document.createElement("form");
    todoForm.setAttribute("id","todo-form");

    const input=document.createElement("input");
    input.setAttribute("id","todo-input")

    const submitButton=document.createElement("button");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("id","todoo-form-submit-button");
    submitButton.textContent="Add todo";

    todoForm.appendChild(title);
    todoForm.appendChild(input);
    todoForm.appendChild(submitButton);

    return todoForm
}