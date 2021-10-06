import Kitchen from './Kitchen.js'
import LivingRoom from './LivingRoom.js'
import Bedroom from './Bedroom.js'
import Bath from './Bath.js'
import '../CSS/FloorPlan.css'

function FloorPlan() {
    return (
        <div className="FloorPlan"><h1>FloorPlan</h1><Kitchen /><LivingRoom /><Bedroom /><Bedroom /><Bedroom /><Bath /><Bath /></div>
    );
}

export default FloorPlan;