class Model {
	constructor () {
		this.students = [
			{id: 1, name: "John Doe", mark: 70, grade: "C"}, 
			{id: 2, name: "Jane Doe", mark: 50, grade: "E"}, 
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
		//not working against name created with new String() but user can't use that
		if(typeof name !== 'string' || isNaN(mark) || mark < 0 || mark > 100) console.error("Model.addStudent: Invalid input");
		this.students.push({id: this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 1, name: name, mark: mark, grade: this.getGrade(mark)});
		this.onStudentListChanged(this.students);
	}

	deleteStudent(id) {
		this.students = this.students.filter(student => student.id != id);
		this.onStudentListChanged(this.students);
	}

	//helper function for step 2 
	bindStudentListChanged(callback) {
		this.onStudentListChanged = callback;
	}
}

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
}

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

const app = new Controller(new Model(), new View());
