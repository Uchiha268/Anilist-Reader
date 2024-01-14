import api from "../api/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import Display from "../components/Display";
function Fetch() {
    const [list, setList] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const typeList = ["Anime", "Manga"];
    const watchStatusList = ["Completed", "Current", "Dropped", "Paused", "Planned"];
    const params = location.pathname.split("/");
    const [username, setUsername] = useState(params[2]);
    const [type, setType] = useState(params[3]);
    const [watchStatus, setWatchStatus] = useState(params[4]);


    const getList = async() => {
        try{
            const response = await api.get("" + username + "/" + type + "/" + watchStatus);
            console.log("Response from server", response.data.data);
            setList(response.data);
        }
        catch(error){
            console.log("Error happened bro");
            console.log(error);
        }  
    }

    useEffect(() => {  
        getList();
    }, [])
    return(
        <>
            <AppHeader/>
            {list && <Display list={list} username={username}/>}
            
        </>
    )
}

export default Fetch;