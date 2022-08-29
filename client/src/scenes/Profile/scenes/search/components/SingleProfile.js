
import { Avatar, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function SingleProfile ({profile}) {
    
    if (!profile) {
        return (
            <section>
                <h2>profile not found!</h2>
            </section>
        )
    }

    return (
        <Paper 
        sx={{width: "80vw",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "20px"}}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar sx={{ width: 48, height: 48, mr: 1 }}  src={profile.picture} />
            <div>
            <Link to={`/profile/${profile.id}`} className="link">
            <Typography variant="body1">{profile.name}</Typography></Link>
            <Typography variant="caption">{profile.description.substring(0,30)}</Typography>
            </div>
        </Box>
        </Paper>
    )
}