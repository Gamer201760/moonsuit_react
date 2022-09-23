interface PeopleProps {
    bpm: number | undefined
    bodytemp: number | undefined
}

function PeopleParameter(props: PeopleProps) {
    return (<div>
        <div className="m-4 text-center w-40 border-2 rounded-lg border-red-800">
            <p>
              BodyParametrs
            </p>
        </div>
        <div className="m-4 text-center w-40 border-2 rounded-lg border-red-600">
            <p>
                BPM: {props.bpm}
            </p>
        </div>
        <div className="m-4 text-center w-40 border-2 rounded-lg border-red-600">
            <p>
                BodyTemp: {props.bodytemp}
            </p>
        </div>
    </div>);
}

export default PeopleParameter;