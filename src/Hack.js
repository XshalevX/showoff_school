import { width } from "@mui/system";
import './Hacked.css'
export default function Hack()
{

    var sectionStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: "url(background.jfif)"
      };

    return(
    <div
      style={{ backgroundImage: "url(" + "https://images5.alphacoders.com/423/423529.jpg" + ")", height:700,backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 1000,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
        
    
    }}
    >
      <h1 style={{fontSize:80, color:'white',textAlign: 'center', fontFamily:"HACKED"}} >YOU HAVE BEEN HACKED</h1>
      </div>
    )
}