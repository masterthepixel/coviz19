//Copyright © 2020 Scott Orlyck.

import 'd3-selection'
import { geoPath } from 'd3-geo'

const path = geoPath()

const StatePath = ({ attributes: { d }}) => (
    <path stroke='#ccc' stroke-width={0.5} stroke-linejoin='round' fill='none' d={path(d)}/>
)

const FeaturePath = ({ attributes: { d, eventListeners }}) => (
    <path 
        stroke={d.fill || ''}
        stroke-linejoin='round'
        stroke-width={0.5}
        fill={d.fill || ''}
        d={path(d.feature) || ''}
        eventListeners={[...eventListeners]}
    />
)

export { StatePath, FeaturePath }