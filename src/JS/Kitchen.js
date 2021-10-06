import Oven from './Oven.js'
import Sink from './Sink.js'
import '../CSS/Kitchen.css'

function Kitchen() {
    return (
        <div className="Kitchen">Kitchen<Oven /><Sink /></div>
    );
}

export default Kitchen;