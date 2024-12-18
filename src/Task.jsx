export default function Task(props){
    return(
        <div className="task">
            <div>
                <h2 className={props.isComplete ? 'task-done':''}>{props.work}</h2>
                <p className={props.priority=='important' ? 'task-red':'task-yellow'}>{props.priority}</p>
            </div>
            <div className="task-btn">
                <button className="delete" onClick={props.delete}>Delete</button>
                <button className="complete" onClick={props.finished}>Complete</button>
            </div>
        </div>
    )
}