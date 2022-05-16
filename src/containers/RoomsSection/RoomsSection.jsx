import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { FormCard, Section } from '../../components';
import styless from './RoomsSection.module.css';

const mockRooms = [{ title: 'Одиночный номер', price: 200, image: 'bibliotellogo2_0.png' }];

export function RoomsSection() {
  return (
    <Section>
      <div style={{ height: '400px' }}>
        <Typography variant="h2" color="#0d233e" fontWeight={700} gutterBottom component="div">
          Amazing LOL Waiting for You
        </Typography>
        <div className={styless.container}>
          {mockRooms.map((room) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="140" image={room.image} alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {room.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
