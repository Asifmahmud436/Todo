export default function Task(props){
    return(
        <div className="task">
            <p>{props.work}</p>
            <p>{props.priority}</p>
            <button onClick={props.delete}>Delete</button>
        </div>
    )
}