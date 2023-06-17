let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let containerList = document.querySelector('.list-items'),
booleanStart;
input.addEventListener('input',()=>input.value.length >= 3 ? booleanStart = true : booleanStart = false)

btn.addEventListener('click',()=>{
    if(booleanStart){
        let taskGroup = document.createElement('div');
        taskGroup.className = 'task-group';
        containerList.appendChild(taskGroup);

        let taskGroupChecker = document.createElement('div');
        taskGroupChecker.className = 'task-group_checker';
        taskGroup.appendChild(taskGroupChecker);
        
        let checkboxBtn = document.createElement('img');
        checkboxBtn.src = './assets/checkbox.svg';
        taskGroupChecker.appendChild(checkboxBtn);
        checkboxBtn.addEventListener('click',()=>{
            taskGroup.className = 'task-group-done';
            checkboxBtn.src = './assets/checkbox-active.svg'
        })

        let textGroup = document.createElement('p')
        textGroup.innerText = input.value
        taskGroup.appendChild(textGroup)

        let taskGroupDelete = document.createElement('div')
        taskGroupDelete.classList.toggle('task-group_delete')
        taskGroup.appendChild(taskGroupDelete);

        let deleteBtn = document.createElement('img')
        deleteBtn.src = './assets/trash.svg';
        taskGroupDelete.appendChild(deleteBtn);
        deleteBtn.addEventListener('click',()=>{
            deleteBtn.src = './assets/trach-active.svg';
            let timerDelete = setTimeout(()=>{
                taskGroup.remove()
                clearTimeout(timerDelete)
            },1500)
        })
    }
})