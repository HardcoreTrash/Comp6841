import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard({title, image, text, link}) {
    let navigate = useNavigate(); 
    function routeChange(link) {
        return function() {
            navigate(link);
        }
    }
    
    return (
        <Card sx={{ width: 345 }} onClick={routeChange(link)}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {text}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}