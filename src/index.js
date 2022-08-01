document.addEventListener("DOMContentLoaded", () => {
  const createTask = document.getElementById("newTaskBtn");
  let inputBox = document.getElementById("new-task-description");
  const taskBox = document.getElementById("list")
  
  createTask.addEventListener("click", (e)=>{
    e.preventDefault();
    let blam = document.createElement("form"); let deleteBtn = document.createElement("button"); 
    blam.innerHTML = inputBox.value; deleteBtn.innerHTML = "X"
    blam.appendChild(deleteBtn); taskBox.appendChild(blam);
    
    deleteBtn.addEventListener("click",(e)=>{
      e.preventDefault();
      blam.remove(); deleteBtn.remove();
    })
  })
});
