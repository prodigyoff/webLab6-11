import {HeaderContainer, HeaderNavigations, HeaderLinks, NavLink} from '../styles/Header.styles.js'
import {CoffeeOutlined} from '@ant-design/icons'
import { useHistory } from 'react-router-dom';

const HeaderLink = (props) =>{
    return(
        <HeaderLinks>
            {props.heading}
        </HeaderLinks>
    )
}

const Header = () =>{
    let history = useHistory();
    const isAuth = localStorage.getItem('isAuth');
  
    const logout = () => {
      localStorage.setItem('isAuth', 'false')
      history.push("/login");
      history.go(0);
    };
    return (
        <HeaderContainer>
            <HeaderNavigations>
                <CoffeeOutlined style={{fontSize:30, color:'grey'}}/>
                <NavLink to = '/' style={{textDecoration:'none'}}>
                <HeaderLink heading='Home'/>
                </NavLink>
                <NavLink to = '/item' style={{textDecoration:'none'}}>
                <HeaderLink heading="Catalog"/>
                </NavLink>
                <NavLink to = '/cart' style={{textDecoration:'none'}}>
                <HeaderLink heading="Cart"/>
                </NavLink>
                {isAuth === 'true' ? (
                        <NavLink style={{ textDecoration: 'none' }} onClick={logout}>
                            <HeaderLink heading = 'Logout' />
                        </NavLink>
                        ) : (
                        <>
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <HeaderLink heading = 'Login' />
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none' }} to="/register">
                                <HeaderLink heading = 'Register' />
                            </NavLink>
                        </>
                        )}
            </HeaderNavigations>
        </HeaderContainer>
    )
}
export default Header;