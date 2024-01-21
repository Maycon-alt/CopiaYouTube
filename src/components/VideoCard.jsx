import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from 'react';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    };

    const handleMouseOut = () => {
        setHovered(false);
    }; 
    return (
        <Card sx={{
            width: { xs: '100%', sm: '358px', md: '320px' },
            boxShadow: "none",
            borderRadius: 0,
            transition: "transform 0.3s ease-in-out",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
            <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
                sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
            />
            </Link>
            <CardContent sx={{ backgroundColor: "#1e1e1e", height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                <Typography variant="subtitle2" color="gray">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
            </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard