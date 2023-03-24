import AppNav from '../components/AppNav';
import {Outlet} from 'react-router-dom';
import { Container } from 'react-bootstrap';


const Layout = (props) => {
    return (
        <div>
            <AppNav />
            <div style={{marginTop: '8vh'}}>
              <Outlet />
            </div>
        </div>
    )
}

export default Layout;