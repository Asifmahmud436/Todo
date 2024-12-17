export default function Task(props){
    return(
        <div className="task">
            <p className={props.isComplete ? 'task-done':''}>{props.work}</p>
            <p>{props.priority}</p>
            <button onClick={props.delete}>Delete</button>
            <button onClick={props.finished}>Complete</button>
        </div>
    )
}