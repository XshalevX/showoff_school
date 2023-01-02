import { Paper,TextField,Box,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Home()
{
    const navigate = useNavigate();

    const handelGoToLogin = () => {
        navigate('/hacked')
    }

    return (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:"center",
          minHeight:"100vh"
        }}
      >
        <Paper elevation={10} sx={{
             display: 'flex',
             flexDirection: 'column',

        }}>
            <TextField id="filled-basic" label="שם פרטי" variant="filled" />  
            <TextField id="filled-basic" label="שם משפחה" variant="filled" />
            <Button variant="contained" onClick={handelGoToLogin}>vda</Button>

        </Paper>
        
      </Box>
    );
}
