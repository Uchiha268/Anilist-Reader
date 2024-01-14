import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";


function DisplayItem(props){
    const entry = props.entry;
    const score = entry["score"];
    const coverImageURL = entry["media"]["coverImage"]["large"];
    const title = entry["media"]["title"]["english"];

    return(
        <>
            <Card sx={{padding: "5%"}}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={5}>
                        <CardMedia
                            sx={{height: "100%"}}
                            image={coverImageURL}
                            title={title + "_img"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={7}>
                    <CardContent>
                        <Typography gutterBottom variant="h4">
                            {title}
                        </Typography>
                        <Typography variant="h6">
                            Score - {score}
                        </Typography>
                    </CardContent>
                    </Grid>
                </Grid>

            </Card>
        </>
    )
}

export default DisplayItem;