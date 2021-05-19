import './style.css';
import {newProject} from './project';

var defaultArray = [{
     title: 'default',
     description: 'default',
     todos: [],
     edit(title,description){
        this.title = title;
        this.description = description;
      }
   }];

if (JSON.parse(localStorage.getItem('projectArray')) === null) {
  localStorage.setItem('projectArray', JSON.stringify(defaultArray));
}

newProject();
