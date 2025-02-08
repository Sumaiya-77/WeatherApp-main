import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox ({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1680466283263-91b51ab91832?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xlYXIlMjBTa3l8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1601454178117-654bc4ea1bea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1519820059087-13fc1cfb452b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbGQlMjAlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1508697014387-db70aad34f4d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
         <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ? RAIN_URL
          : info.temp > 15
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
          info.humidity > 80
          ? <ThunderstormIcon/>
          : info.temp > 15
          ? <WbSunnyIcon/>
          : <AcUnitIcon/>
        }
        </Typography>
        <Typography
         variant="body2" 
         color='text.secondary'
         component={"span"}
          >
          <p>Temperature : {info.temp}&deg;C</p>
          <p>Humidity : {info.humidity}</p>
          <p>Min Temperature : {info.tempMin}&deg;C</p>
          <p>Max Temperature : {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like  {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
        </Card>
        </div>
        </div>
    )
}