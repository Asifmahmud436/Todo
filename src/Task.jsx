export default function Task(props){
    return(
        <div className="task">
            <h2 className={props.isComplete ? 'task-done':''}>{props.work}</h2>
            <p className={props.priority=='important' ? 'task-red':'task-yellow'}>{props.priority}</p>
            <button onClick={props.delete}>Delete</button>
            <button onClick={props.finished}>Complete</button>
        </div>
    )
}