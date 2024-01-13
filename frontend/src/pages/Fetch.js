import api from "../api/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
            // const response = await api.get("Uchiha268/ANIME/COMPLETED");
            console.log("Response from server", response);
            setList(response.data);
        }
        catch(error){
            console.log(error);
        }  
    }

    useEffect(() => {  
        getList();
    }, [])
    return(
        <>
            <div>
                <h1>This is the fetch page!</h1>
            </div>
        </>
    )
}

export default Fetch;