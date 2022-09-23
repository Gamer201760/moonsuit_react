interface AirProps {
    co: number | undefined
    o2: number | undefined
    speedflow: number | undefined
    pressure: number | undefined
    temp: number | undefined

}

function AirSysterm(props: AirProps) {
    if (props.temp != undefined && props.pressure != undefined) {
        return (
            <div className="">
                <div className="m-4 text-center w-44 border-2 rounded-lg border-cyan-600 text-xl">
                    <p>
                        AirSystem
                    </p>
                </div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-cyan-500">
                    <p>
                        CO {props.co} %
                    </p>
                </div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-cyan-500">
                    <p>
                        O2 {props.o2} %
                    </p>
                </div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-cyan-500">
                    <p>
                        SpeedFlow {props.speedflow} l/m
                    </p>
                </div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-cyan-500">
                    <p>
                        Temp {Math.round(props.temp)} C
                    </p>
                </div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-cyan-500">
                    <p>
                        Pressure {Math.round(props.pressure)} mm.rt
                    </p>
                </div>
            </div>
        );
    }
    return (<></>)
}

export default AirSysterm;