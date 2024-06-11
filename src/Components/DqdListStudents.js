import React from 'react';

export default function DqdListStudents({ renderDqdListStudents, onDqdEdit,  }) {
    console.log(renderDqdListStudents);

    const dqdHandleEdit = (param) => {
        console.log("Edit:", param);
        onDqdEdit(param);
    };

    

    if (!renderDqdListStudents) {
        return <div>No tasks available</div>;
    }

    let dqdElementTask = renderDqdListStudents.map((task, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.dqdId}</td>
                <td>{task.dqdName}</td> 
                <td>{task.dqdAge}</td>
                <td>{task.dqdIsActive}</td>
                <td>
                    <button className='btn btn-success' onClick={() => dqdHandleEdit(task)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => (task.dqd_taskId)}>Remove</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách các nhiệm vụ</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Dqd STT</th>
                        <th>Dqd ID</th>
                        <th>Dqd Name</th>
                        <th>Dqd Age</th>
                        <th>Dqd IsAction</th>
                    </tr>
                </thead>
                <tbody>
                    {dqdElementTask}
                </tbody>
            </table>
        </div>
    );
}