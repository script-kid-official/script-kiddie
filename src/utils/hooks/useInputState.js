import { useState } from 'react'
export default initialVal => {
    const [state, setState] = useState(initialVal);

    const handleChange = e => {
        (typeof e === 'object') ? setState(e.target.value) : setState(e);
    }
    return [state, handleChange]
}