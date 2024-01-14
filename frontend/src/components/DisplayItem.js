import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";


function DisplayItem(props){
    const entry = props.entry;
    const score = entry["score"];
    const coverImageURL = entry["media"]["coverImage"]["large"];
    const title = entry["media"]["title"]["english"] ? entry["media"]["title"]["english"] : entry["media"]["title"]["native"];

    return(
        <>
            <Card sx={{padding: "5%", height: '80%', width:"100%", alignItems:"center", justifyContent:"center", display:"flex", boxShadow:4}}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={5} >
                        <CardMedia
                            component={"img"}
                            sx={{maxHeight: "100%"}}
                            image={coverImageURL}
                            title={title + "_img"}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={7} >
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="h6" sx={{alignSelf:"flex-end"}}>
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