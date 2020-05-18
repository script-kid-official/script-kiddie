import { useState } from 'react'
export default initialVal => {
    const [state, setState] = useState(initialVal);

    const stateToggle = () => {
        setState(!state)
    }
    return [state, stateToggle]
}