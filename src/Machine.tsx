import './Machine.css'

function Machine(props: {fruit1: string, fruit2: string, fruit3: string}) {
    const win: boolean = props.fruit1 === props.fruit2 && props.fruit2 === props.fruit3;
    const result: string = win ? "Winner!" : "Loser!";
    return (
        <div className="display">
            <p>{props.fruit1} {props.fruit2} {props.fruit3}</p>
            <p>{result}</p>
        </div>
    )
}

export default Machine