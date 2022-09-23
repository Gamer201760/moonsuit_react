import { ReactElement, useState } from "react"

interface BtnProps {
    ws: WebSocket | undefined
    pin: number
    skey: string
    children: any
}
function BtnPin(props: BtnProps) {
    const [pinstate, setpinstate] = useState(true)

    const togglepin = (pin: number) => {
        setpinstate(!pinstate)

        const toggledstate = pinstate ? "off" : "on"
        console.log(toggledstate);

        var ele = `{
            "action": "setcontrolling",
            "request_id": 1231,
            "controlling": {
                "${toggledstate}": [${pin}]
            },
            "keys": ["${props.skey}"]
        }`
        
        
        props.ws?.send(ele)
    }
    const btncolor = pinstate ? "border-green-600" : "border-red-600"

    return (
        <div>
            <button className={`m-4 w-44 h-12 text-center border-2 ${btncolor} rounded-2xl`} onClick={() => togglepin(props.pin)}>{props.children}</button>
        </div>
    );
}

export default BtnPin;