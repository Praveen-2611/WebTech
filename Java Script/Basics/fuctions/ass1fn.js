let taskformE1=document.getElementById('task-form');
let taskE1=document.getElementById('task-el');
let tasklist=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
taskformE1.addEventListener('submit',function(e)
{
    e.preventDefault();
    let task=taskE1.value;
    tasklist.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(tasklist));
    taskE1.value='';
    displayTasks()

});

function displayTasks()
{
    let eachTask=''
    tasklist.forEach((task,i) => {
                    eachTask+=`<li class="list-group-item list-group-item-dark mb-2">
                                <span>${task}</span>
                                    <i class="bi bi-archive-fill float-end" onclick="deletetask(${i})"></i>
                
                                    <i class="bi bi-pen-fill float-end" onclick="updatetask(${i})"></i>
                                </li>`
                        });
                        document.getElementById('task-list-el').innerHTML.eachTask

                    
}
displayTasks();
//     createTask();


// })
// //createTask

// function createtask()
// {
//     let task=taskinputE1.ariaValueMax.trim();
//     let taskobj={taskval:task,isCompleted:false};


//     tasklist.unshift(taskobj);
//     localStorage.setItem('task',json.stringify(tasklist));
//     console.log(tasklist);
//     taskinputE1.value='';
// }
// //display tasks
//  function displaytasks()
//  {
//     if(tasklist.length!=0)
//     {
//         let eachtask='';
//         tasklist.forEach((task,i) => {
//             eachtask+=`<li class="list-group-item list-group-item-dark mb-2">
//                         <span>${task}</span>
//                         <button class="float-end ms-2 abc">
//                             <i class="bi bi-trash" onclick="deletetask(${index})"></i>
//                         </button>
//                         <button class="float-end abc">
//                             <i class="bi bi-pen" onclick="updatetask(${index})"></i>
//                         </button>
//                     </li>    `
            
//         });
//         document.getElementById('tasklist').innerHTML.eachtask
//     }
//  }
 //delete functionality
  

function deletetask(index)
{
    tasklist.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasklist));
    displayTasks();

}


//update functionality

function updatetask(index)
{
    taskinputE1.value=tasklist[index];
    tasklist.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasklist));
    displayTasks();
}


// function updatetask(index)
// {
//     taskinputE1.value=tasklist[index].taskval;
//     tasklist.splice(index,1);
//     localStorage.setItem('tasks',JSON.stringify(tasklist));
//     displaytasks();
// }