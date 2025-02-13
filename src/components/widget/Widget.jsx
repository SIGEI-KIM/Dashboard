import "./widget.scss"
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({ type }) => {
  let data;

  //temporary fetch data
  const amount = 100;
  const percentage = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineIcon className="icon" style={{
          color: "crimson", 
          backgroundColor:"rgba(255,0,0,0.2)"}}/>,
      }     
      break;
      case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartIcon className="icon"style={{
          backgroundColor: "rgba(218, 165, 32, 0.2)",
          color: "goldenrod",
        }}/>,
      }     
      break; 
      case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View all earnings",
        icon: <MonetizationOnIcon className="icon" style={{ 
          backgroundColor: "rgba(0, 128, 0, 0.2)", 
          color: "green" }}/>,
      }     
      break; 
      case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletIcon className="icon" style={{
          backgroundColor: "rgba(128, 0, 128, 0.2)",
          color: "purple",
        }}/>,
      }     
      break;   
    default:
      break;
  };


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardControlKeyIcon/>
          {percentage} %         
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget