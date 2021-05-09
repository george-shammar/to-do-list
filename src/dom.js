
const newProject = () => {
    const newProjectButton = document.getElementById('new-project');
    const projectForm=document.getElementById('project-form');
    projectForm.style.display = 'none';

    newProjectButton.addEventListener('click', function form() {
        projectForm.style.display = 'block';
    })
        
}

export {newProject};