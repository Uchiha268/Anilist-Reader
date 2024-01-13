import { Input, Paper, Typography, TextField, Stack, MenuItem, Select, Button, Box} from "@mui/material";
import "../css/InputCardStyle.css";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";



function InputCard(){
    const navigate = useNavigate();
    const typeList = ["Anime", "Manga"];
    const watchStatusList = ["Completed", "Current", "Dropped", "Paused", "Planned"];
    const [username, setUsername] = useState("");
    const [type, setType] = useState("Anime");
    const [watchStatus, setWatchStatus] = useState("Completed");

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }
    const handleWatchStatusChange = (event) => {
        setWatchStatus(event.target.value);
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handleFetchClick = (event) => {
        navigate("/fetch/" + username + "/" + type + "/" + watchStatus);
    }
    return(
        <>
            <div id="input-card-wrapper">
                <Paper
                elevation={3}
                sx={{width: "100%", padding:"5%", justifyContent:"center", margin:"auto", display:"flex"}}
                >
                    <Stack sx={{border:"none"}}>

                            <Typography sx={{textAlign:"center"}}>
                                <h2>Username</h2>
                            </Typography>

                            <TextField variant="outlined" label="Username" id="Username" sx={{textAlign: "center"}} onChange={handleUsernameChange}/>
                            <Typography sx={{textAlign:"center"}}>
                                <h2>Type</h2>
                            </Typography>
                            <Select value={type} onChange={handleTypeChange}>
                                {typeList.map((singletype, index) => {
                                    return(<MenuItem value={singletype} key={index}>{singletype}</MenuItem>)
                                })}

                            </Select>
                            <Typography sx={{textAlign:"center"}}>
                                <h2>Status</h2>
                            </Typography>
                            <Select value={watchStatus} onChange={handleWatchStatusChange}>
                                {watchStatusList.map((singleWatchStatus, index) => {
                                    return(<MenuItem value={singleWatchStatus} key={index}>{singleWatchStatus}</MenuItem>)
                                })}
                            </Select>
                            <Box sx={{justifyContent:"center", display:"flex"}}>
                                <Button variant="contained" sx={{marginTop: "15%", padding:"5%", width:"80%"}} onClick={handleFetchClick}>Fetch!</Button>
                            </Box>
                    </Stack>
                </Paper>
            </div>
        </>
    )
}

export default InputCard;