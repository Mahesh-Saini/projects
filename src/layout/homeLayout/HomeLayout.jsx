import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import "./HomeLayout.scss"

const HomeLayout = () => {
    return (
        <div className='HomeLayout'>
            <Header />
            <Outlet />
        </div>
    )
}

export default HomeLayout