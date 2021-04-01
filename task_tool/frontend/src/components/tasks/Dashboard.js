import React,{Fragment} from 'react'
import AddTaskForm from './Form';
import Tasks from './Tasks'

export default function Dashboard() {
    return (
        <div>
            <Fragment>
                <AddTaskForm />
                <Tasks />
            </Fragment>
        </div>
    )
}
