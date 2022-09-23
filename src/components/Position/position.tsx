import { Canvas, useFrame } from '@react-three/fiber'
import Suit from "../Suit/suit";

interface PositionProps{
    x: number | undefined
    y: number | undefined
    z: number | undefined
}

function Position(props:PositionProps) {
    if (props.x != undefined && props.y != undefined && props.z != undefined){
        return (
            <div className="flex justify-start">
                <div className="relative h-32 w-32">
                    <Canvas className="">
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Suit x={Math.round((props.x + Number.EPSILON)* 100) / 100} z={Math.round((props.z + Number.EPSILON)* 100) / 100} y={Math.round((props.y + Number.EPSILON)* 100) / 100} />
                    </Canvas>
                </div>
                <div>
                    
                    <div className="m-4 text-center w-24 border-2 rounded-lg border-amber-600">
                        <p>
                            X: {Math.round(props.x)}
                        </p>
                    </div>
                    <div className="m-4 text-center w-24 border-2 rounded-lg border-amber-600">
                        <p>
                            Y: {Math.round(props.y)}
                        </p>
                    </div>
                    <div className="m-4 text-center w-24 border-2 rounded-lg border-amber-600">
                        <p>
                            Z: {Math.round(props?.z)}
                        </p>
                    </div>
                </div>
            </div>
    
        );
    }
    return (<>
    </>)
}

export default Position;