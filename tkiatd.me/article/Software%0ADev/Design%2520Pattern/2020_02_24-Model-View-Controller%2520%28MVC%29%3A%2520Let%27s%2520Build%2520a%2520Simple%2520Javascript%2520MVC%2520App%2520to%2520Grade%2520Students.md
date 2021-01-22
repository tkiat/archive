## What is MVC?

It is a famous software design pattern that separate code into 3 parts: model, view, and controller.

## Why do people sometimes use MVC?

MVC is not a one size fits all for all applications. Yet it allows organized code. Some web frameworks that use MVC include Ruby on Rails and AngularJS. MVC is a quite vague term that can be interpreted differently, and therefore the implementations can be different;

## Explanation of Each Component

### M: Model

It is basically the brain of the application. It interacts with database via CRUD (create, read, update, and delete) operations. It doesn't usually interact with DOM element directly (depends on the framework).

### V: View

As you might guess it, it is what end user sees and interact with. It consists of HTML elements/CSS and it is where the application gets data from user.

### C: Controller

An intermediate agent &#128526;. It receive input from the view, process it, and get data from the model. The data is finally passed back to the view.

## MVC Architecture

Note that MVC is a rather vague architectural pattern. There is no strict UML diagram of it but still the general flow of the pattern is as follows - 

1. User interacts with a view
2. View sends the event to controller
3. Controller updates the model
4. Model alerts view (via controller) that the data has been changed
5. View pull data from model and updates itself

## Let's Code a Grading Tool!

Before going through the steps, the following code is actually a more barebone version of another MVC tutorial on https://www.taniarascia.com/javascript-mvc-todo-app/ but with a slightly different application. The steps there are nicely laid out, and I am gonna do the same here :). The final code is stored in this [GitLab Project](https://gitlab.com/tkiatd/snippets-general/-/tree/master/mvc) 

The MVC concept might sounds indimidating but I can dissect that into two steps. We are going to build Model and View classes. After that we will add handler to notify Model and View for events though controller class. Finished!

### Initial Setup
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
	<link href="style.css">
</head>
<body>
	<div id="root"></div>

	<script src="script.js"></script>
</body>
</html>
```
script.js
```
class Model {
  constructor() {}
}

class View {
  constructor() {}
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View())
```
index.html is our starting page, and script.js is a very barebone MVC template: the Model and View classes are independent, the Controller class acts as their communication middleman.

### Model
```
class Model {
  constructor () {
    this.students = [
      {id: 1, name: "John Doe", mark: 70},
      {id: 2, name: "jane Doe", mark: 50},
    ];
  }

	getGrade(mark) {
		switch(true) {
			case (mark >= 90): return "A";
			case (mark >= 80): return "B";
			case (mark >= 70): return "C";
			case (mark >= 60): return "D";
			case (mark >= 50): return "E";
			default: return "F";
		}
	}

  addStudent(name, mark) {
    if(!name || !mark) console.error("Model.addStudent: Invalid input");
    this.students.push({id: this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 1, name: name, mark: mark, grade: this.getGrade(mark)});
  }

  deleteStudent(id) {
    this.students = this.students.filter(student => student.id != id);
  }
}
```
Now we have basic functionalities of a Model part: add and delete students form the list. You can test by typing in devTools app.model.addStudents({"James Doe", 80}) and then app.model.students

### View
```
class View {
  constructor() {
		this.app = document.getElementById('root');

		this.title = document.createElement('h1');
		this.title.textContent = "Grading Tool";

		this.form = document.createElement('form');

		this.input_name = document.createElement('input');
		this.input_name.type = 'text';
		this.input_name.placeholder = 'Student Name';
		this.input_name.name = 'name';

		this.input_mark = document.createElement('input');
		this.input_mark.type = 'number';
		this.input_mark.min = 0;
		this.input_mark.max = 100;
		this.input_mark.placeholder = 'Mark';
		this.input_mark.name = 'mark';

		this.submitButton = document.createElement('button');
		this.submitButton.textContent = 'Submit';

		this.studentList = document.createElement('ul');
		this.studentList.classList.add('student-list');

		this.form.append(this.input_name, this.input_mark, this.submitButton);
		this.app.append(this.title, this.form, this.studentList);
	}

	_resetInput() {
		this.input_name.value = '';
		this.input_mark.value = '';
	}

	displayStudents(students) {
		//remove all nodes
		while (this.studentList.firstChild) {
			this.studentList.removeChild(this.studentList.firstChild);
		}

		//add nodes
		if (students.length === 0) {
			const p = document.createElement('p');
			p.textContent = 'No student entry! Add a student?';
			this.studentList.append(p);
		} 
		else {
			students.forEach(student => {
				const li = document.createElement('li');
				li.classList.add('entry');
				li.id = student.id;

				const span = document.createElement('span');
				span.contentEditable = true;
				span.textContent = 'Name: ' + student.name + ' Mark: ' + student.mark + ' Grade: ' + student.grade;

				const deleteButton = document.createElement('button');
				deleteButton.classList.add('delete');
				deleteButton.textContent = 'Delete';
				li.append(span, deleteButton);

				this.studentList.append(li);
			})
		}
	}
}
```
In class View, we define dom elements in constructor, define getter and resetter for the input value, and add a method to display the student list. The view is still not yet functioning due to the lack of controller but we can type command in devTools to test it, something like app.view.displayStudents(app.model.students).

### Controller

```
class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		//display students once at startup
		this.onStudentListChanged(this.model.students);
	
		//step 1: when user interact with View, View notifies Controller about the change, then Controller tells Model to update its data
		this.view.bindAddStudent(this.handleAddStudent)
		this.view.bindDeleteStudent(this.handleDeleteStudent)

		//step 2: on Model data changes, it notifies Controller which in turn notify View to update the display
		this.model.bindStudentListChanged(this.onStudentListChanged)
	}

	//helper functions for step 1
	handleAddStudent = (name, mark) => {
		this.model.addStudent(name, mark);
	}

	//helper function for step 1 
	handleDeleteStudent = id => {
		this.model.deleteStudent(id);
	}
	
	//helper functions for step 2
	onStudentListChanged = students => {
		this.view.displayStudents(students);
	}
}
```
Controller is the middleman between Model and View. It notifies Model when View changes (by binding them as the step 1 in the code) and vice versa (step 2 in the code). The helper functions help achieving this.

This also means we have to add more functions in both Model and View to serve the Controller class.

### Model
 
```
addStudent(name, mark) {
	...
	this.onStudentListChanged(this.students);
}

deleteStudent(id) {
	...
	this.onStudentListChanged(this.students);
}

//helper function for step 2 
bindStudentListChanged(callback) {
	this.onStudentListChanged = callback;
}
```

### View

```
//helper function for step 1 
bindAddStudent(handler) {
	this.form.addEventListener('submit', event => {
		event.preventDefault()

		if (this.input_name.value && this.input_mark.value) {
			handler(this.input_name.value, this.input_mark.value)
			this._resetInput()
		}
	})
}
//helper function for step 1 
bindDeleteStudent(handler) {
	this.studentList.addEventListener('click', event => {
		if (event.target.className === 'delete') {
			const id = parseInt(event.target.parentElement.id)

			handler(id)
		}
	})
}
```
Now we get our MVC app up and running!
### What to do next?
* Add local storage so that the student list is semi-presistent
* Add live editing functionalities
* Convert data entry from list to table
* Make the app CSV file compatible (both input and output)
* Add some beautiful CSS
* etc.
