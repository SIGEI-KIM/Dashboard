import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English           
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />           
          </div>
          <div className="item">
            <FullscreenIcon className="icon" />        
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>         
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>        
          </div>
          <div className="item">
            <ListIcon/>           
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"             
            alt="" 
            className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar