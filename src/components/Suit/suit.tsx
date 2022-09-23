import { Canvas, useFrame } from '@react-three/fiber'

interface SuitProps {
    x: number | undefined
    y: number | undefined
    z: number | undefined
}

function Suit(props: SuitProps) {
    return (
        <mesh
            rotation={[props.x, props.y, props.z]}
        >

            <boxGeometry args={[3, 3, 1]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>

    );
}

export default Suit;