import React from 'react'
import type { CoordinatePair } from '../types/CoordinatePair'


interface CoordinatePairProps {
    locationCoords: CoordinatePair[]
}

const GlobalMap = ({locationCoords}: CoordinatePairProps) => {
   
    return ( 
        <div>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center text-4xl font-bold "> {" "}
                    Your Travel Journey
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default GlobalMap
