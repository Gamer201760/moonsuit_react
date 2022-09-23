interface ThermalProps {
    tempcontrol: number | undefined
    tempbefore: number | undefined
    tempafter: number | undefined
    speedflowcooling: number | undefined
}
function ThermalControl(props: ThermalProps) {
    return (
        <div>
            <div className="m-4 text-center w-44 border-2 rounded-lg border-blue-800 text-xl ">
                <p>
                    TermalControl
                </p>
            </div>
            <div className="m-4 text-center w-44 border-2 rounded-lg border-blue-600">
                <p>
                    TempControl: {props.tempcontrol} C
                </p>
            </div>
            <div className="m-4 text-center w-44 border-2 rounded-lg border-blue-600">
                <p>
                    TempBefore: {props.tempbefore} C
                </p>
            </div>
            <div className="m-4 text-center w-44 border-2 rounded-lg border-blue-600">
                <p>
                    TempAfter: {props.tempafter} C
                </p>
            </div>
            <div className="m-4 text-center w-44 border-2 rounded-lg border-blue-600">
                <p>
                    SpeedFlow: {props.speedflowcooling} l/m
                </p>
            </div>
        
        </div>
    );
}

export default ThermalControl;