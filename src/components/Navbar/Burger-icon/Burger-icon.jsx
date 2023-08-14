import { setActive } from '../../../store/reducers/dataReducer';
import { useDispatch } from 'react-redux'

import './Burger-icon.scss'

const BurgerIcon = () => {
    const dispatch = useDispatch();
    return (
        <span className='icon--menu' onClick={() => dispatch(setActive('active'))}>
            <span className='bar'></span>
            <span className='bar'></span>
        </span>
    )
}

export default BurgerIcon;