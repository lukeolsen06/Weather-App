import type { CoordinatePair } from '../types/CoordinatePair'
import Globe from 'react-globe.gl';
import type { GlobeMethods } from "react-globe.gl";
import { useRef, useEffect } from 'react';


interface CoordinatePairProps {
    locationCoords: CoordinatePair[]
}

const GlobalMap = ({locationCoords}: CoordinatePairProps) => {

    const globeRef = useRef<GlobeMethods | undefined>(undefined)

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.5;
        }
    }, [])
   
    return ( 
        <Globe 
            ref={globeRef}
            globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)"
            pointColor={() => "#FF5733"}
            pointLabel="name"
            pointsData={locationCoords}
            pointRadius={0.5}
            pointAltitude={0.1}
            pointsMerge={true}
            width={800}
            height={600}
        />
    )
}

export default GlobalMap
