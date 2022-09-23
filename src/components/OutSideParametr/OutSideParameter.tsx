interface OutSideProps {
    vibrations: number | undefined

}

function OutSideParameter(props:OutSideProps) {
    if (props?.vibrations != undefined) {
        return (
            <div>
                <div className="m-4 text-center w-48 border-2 rounded-lg border-amber-600 text-xl">
                    <p>
                        OutSideParameter
                    </p>
                </div>
                
                <div className="m-4 text-center w-48 border-2 rounded-lg border-amber-500">
                    <p>
                        Vibration {Math.round(props.vibrations)} 
                    </p>
                </div>
            </div>
        );
    }
    return (<>
    </>)
    
}

export default OutSideParameter;