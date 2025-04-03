import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://th.bing.com/th/id/OIP.elp43VUHru64h9yW-Uh0ZQHaEK?rs=1&pid=ImgDetMain";

  const COLD_URL =
    "https://th.bing.com/th/id/OIP.H1MQOlWv65cSzJpDkFNl7AHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

  const RAIN_URL =
    "https://th.bing.com/th/id/OIP.NVmOLLIfdTJB64Ldu-nqZwHaEo?w=297&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7";
  const HOT_URL =
    "https://th.bing.com/th?q=Sunny+Spring+Background+Wallpaper&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=strict&t=1&mw=247";
  return (
    <div className="CardContainer">
      <div className="InfoBox">
        <h1>Weather </h1>
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
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature: {info.temp}&deg;C</div>
              <div>Humidity: {info.humidity}</div>
              <div>Feels Like: {info.feelsLike}</div>
              <div>Weather: {info.weather}</div>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
