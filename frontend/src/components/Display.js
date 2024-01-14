import { Box, Container, Grid, Stack, Typography, Avatar } from "@mui/material";
import DisplayItem from "./DisplayItem";

function Display(props){
    // let list = "{\"data\":{\"MediaListCollection\":{\"lists\":[{\"entries\":[{\"score\":0,\"media\":{\"coverImage\":{\"large\":\"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150672-2WWJVXIAOG11.png\"},\"title\":{\"english\":\"Oshi No Ko\"}}},{\"score\":7,\"media\":{\"coverImage\":{\"large\":\"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21256-ErFGk90Kr5Ab.jpg\"},\"title\":{\"english\":\"Dimension W\"}}}],\"name\":\"Dropped\"}]}}}"
    const list = props.list
    const username = props.username;
    const entries = list["data"]["MediaListCollection"]["lists"][0]["entries"];
    const listName = list["data"]["MediaListCollection"]["lists"][0]["name"];
    const userAvatar = list["data"]["MediaListCollection"]["user"]["avatar"]["large"];

    console.log(entries);
    return(
        <>
            <Box sx={{marginTop: "1%", marginLeft: "2%", display:"flex"}}>
                <Avatar variant="rounded" src={userAvatar} sx={{height:56, width:56}}/>
                <Typography gutterBottom variant="h6" sx={{marginTop: "1%", marginLeft: "1%"}}>
                    {username}
                </Typography>
            </Box>
            <Box sx={{marginTop: "2%", display: "flex", justifyContent:"center"}}>
                <Stack>
                    
                    <Typography gutterBottom variant="h4">
                        {listName}
                    </Typography>
                </Stack>
            </Box>
            <Container sx={{marginTop:"1%"}}>
                <Grid container spacing={2} alignItems="stretch">
                    {entries.map((entry, item) => {
                        return(
                            <Grid item xs={12} sm={6} md={4} style={{display: 'flex'}}>
                                <DisplayItem entry={entry}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default Display;