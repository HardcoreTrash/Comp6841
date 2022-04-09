import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../Card';
import './Grid.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({list}) {
  return (
    <Box sx={{ flexGrow: 1 }} className="grid-margin">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {list.map((item, index) => {
            return (
                <Grid item xs={2} sm={4} md={4} key={index} className="grid-size">
                    <Card title={item.title} image={item.image} text={item.text} link={item.url} />
                </Grid>
            )
        })}
      </Grid>
    </Box>
  );
}