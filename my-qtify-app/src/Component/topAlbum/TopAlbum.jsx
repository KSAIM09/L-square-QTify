import React, { useEffect, useState } from 'react';
import { topAlbumData, getUid } from '../Data/Data';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import "./TopAlbum.css";


const TopAlbum = () => {
    const [albumData, setAlbumData] = useState([]);

    const [collapseView, setCollapseView] = useState(true);

    useEffect( () => {
        const loadHandler = async () => {
            try{
                const res = await topAlbumData();
                setAlbumData(res);
            }catch (error){
                console.log("Error fetching Album Data:", error);
            }
        };

        loadHandler();
    }, []);

    const handOnClick = () => {
        setCollapseView(!collapseView);
    };

    return(
        <Box className = "topAlbum">
            <div className='topAlbum_static'>
                <h3>Top Albums</h3>
                <button onClick={handOnClick}>  
                    {collapseView ? `Show all` : `Collapse`}
                </button>
            </div>
            <Grid 
                container
                spacing={collapseView ? 2 : 2}
                style={{ paddingLeft: collapseView ? "30px" : "15px" }}
                className='topAlbum_cards'
            >
                {albumData.map((albumItem, index) => {
                    const id = getUid();

                    if(collapseView && index < 6){
                        return (
                            <Grid item xs={2}>
                                <Card key={id} data={albumItem} type='normal' />
                            </Grid>
                        );
                    }
                    else if(!collapseView) {
                        return (
                            <Grid item xs={2}>
                                <Card key={id} data={albumItem} type='normal' />
                            </Grid>
                        );
                    }
                    else{
                        return null;
                    }
                })};
            </Grid>
        </Box>
    );
};

export default TopAlbum;