import { Container, Grid } from "@mui/material";
import DisplayItem from "./DisplayItem";

function Display(props){
    let list = "{\"data\":{\"MediaListCollection\":{\"lists\":[{\"entries\":[{\"score\":0,\"media\":{\"coverImage\":{\"large\":\"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150672-2WWJVXIAOG11.png\"},\"title\":{\"english\":\"Oshi No Ko\"}}},{\"score\":7,\"media\":{\"coverImage\":{\"large\":\"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21256-ErFGk90Kr5Ab.jpg\"},\"title\":{\"english\":\"Dimension W\"}}}],\"name\":\"Dropped\"}]}}}"
    list = JSON.parse(list);
    const entries = list["data"]["MediaListCollection"]["lists"][0]["entries"]
    const listName = list["data"]["MediaListCollection"]["lists"][0]["name"]

    console.log(entries);
    return(
        <>
            <Container sx={{marginTop:"3%"}}>
                <Grid container spacing={2}>
                    {entries.map((entry, item) => {
                        return(
                            <Grid item xs={12} sm={6} md={4}>
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