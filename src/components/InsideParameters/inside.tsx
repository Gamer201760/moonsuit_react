interface InSideProps {
    temp: number | undefined
    humi: number | undefined
    pressure: number | undefined

    voltage: number | undefined
    current: number | undefined
}
function InSide(props: InSideProps) {
    if (props?.temp != undefined && props?.pressure != undefined && props?.humi != undefined) {

        return (
            <div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-sky-700 text-xl">
                    <p>
                        InSideParameter
                    </p>
                </div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-sky-500">
                    <p>
                        Temp: {Math.round((props.temp + Number.EPSILON)*100) / 100} C
                    </p>
                </div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-sky-500">
                    <p>
                        Humi: {Math.round((props.humi + Number.EPSILON)*100) / 100} %
                    </p>
                </div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-sky-500">
                    <p>
                        Pressure: {Math.round((props.pressure + Number.EPSILON)*100) / 100} mm.rt
                    </p>
                </div>
                {/* <div className="m-4 text-center w-44 border-2 rounded-lg border-sky-500">
                    <p>
                        Voltage: {props.voltage} V
                    </p>
                </div>
                <div className="m-4 text-center w-44 border-2 rounded-lg border-sky-500">
                    <p>
                        Current: {props.current} A
                    </p>
                </div> */}
            </div>
        );
    }
    return (<></>)
}

export default InSide;