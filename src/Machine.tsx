import './Machine.css'

function Machine(props: {fruit1: string, fruit2: string, fruit3: string}) {
    const {fruit1, fruit2, fruit3} = props;
    const win: boolean = fruit1 === fruit2 && fruit2 === fruit3;
    const result: string = win ? "Winner!" : "Loser!";
    return (
        <div className="display">
            <p>{fruit1} {fruit2} {fruit3}</p>
            <p>{result}</p>
        </div>
    )
}

export default Machine