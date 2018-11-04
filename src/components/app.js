import React from 'react';
import Table from './table';

const students = [
    {student: 'Ana', course: 'Science', grade: 94},
    {student: 'Day', course: 'English', grade: 100},
    {student: 'Caitlin', course: 'Math', grade: 85},
    {student: 'Alan', course: 'Woodworking', grade: 76}
];

function App(props){
    return (
            <div className="container">
                <h1>Student Grade Table</h1>
                <Table data={students}/>
            </div>
            )
}

export default App;