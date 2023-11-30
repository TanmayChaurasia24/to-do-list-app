console.log("working....");

document.querySelector('.addtask-area').style.display = "none";

const writeArea = document.querySelector('.write-area');

writeArea.addEventListener('keydown',(Event)=>{
    if(Event.key === 'Enter')
    {
        Event.preventDefault();
        addtask();
    }
})

document.querySelector('.addtask-icon').addEventListener('click', () => {
    // Hide the ring initially
    document.querySelector('.ring').style.display = 'none';
    writeArea.focus();

});


const button = document.querySelector('.addtask-icon');
function addtask(){
    const addTaskArea = document.querySelector('.addtask-area');
    const taskList = document.querySelector('.tasklist');


    if (addTaskArea.style.display === 'none') {
        addTaskArea.style.display = 'block';
    } else {
        if (writeArea.value.trim() !== '') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(writeArea.value));

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-task';
            removeButton.textContent = 'remove';
            removeButton.addEventListener('click', () => {
                li.remove();
                if (document.querySelector('.tasklist').children.length === 0) {
                    // Show the ring only if the tasklist is empty
                    document.querySelector('.ring').style.display = 'inline';
                }
            });

            const li = document.createElement('li');
            li.appendChild(label);
            li.appendChild(removeButton);
            taskList.appendChild(li);
            writeArea.value = '';

            addTaskArea.style.display = 'none';
        }
    }
}





