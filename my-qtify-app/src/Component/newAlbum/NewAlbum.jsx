import React, { useEffect, useState } from "react";
import { newAlbumData, getUid } from "../Data/Data";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import "./NewAlbum.css";


const NewAlbum = () => {
    const [albumData, setAlbumData] = useState([]);

    const [collapseView, setCollapseView] = useState(true);


    useEffect( () => {
        const loadHandler = async () => {
            try{
                const res = await newAlbumData();
                setAlbumData(res);
            }catch(error){
                console.log("Error fetching new Album data: ", error);
            }
        };
        loadHandler();
    }, []);

    const handleOnClick = () => {
        setCollapseView(!collapseView);
    };
    

    return (
        <Box className='newAlbum'>
            <div className="newAlbum_static">
                <h3>New Albums</h3>
                <button onClick={handleOnClick}>
                    {collapseView ? `Show all` : `Collapse`}
                </button>
            </div>
            <Grid
                container
                spacing={collapseView ? 2 : 2}
                style={{ paddingLeft: collapseView ? "30px" : "15px" }}
                className="newAlbum_cards"
            >
                {albumData.map ((albumItem, index) => {
                    const id = getUid();

                    if (collapseView && index < 6) {
                        return (
                          <Grid item xs={2}>
                            <Card key={id} data={albumItem} type="normal" />
                          </Grid>
                        );
                    } else if (!collapseView) {
                        return (
                            <Grid item xs={2}>
                            <Card key={id} data={albumItem} type="normal" />
                          </Grid>
                        );
                    } else {
                        return null;
                    }
                })}
            </Grid>
        </Box>
    );
};

export default NewAlbum;