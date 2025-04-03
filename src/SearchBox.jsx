import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import _default from "@emotion/styled";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.weatherapi.com/v1/current.json";
  const API_KEY = "a8517b2be11943f6bde90045252803";

  const weatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.current.temp_c,
        weather: jsonResponse.current.condition.text,
        humidity: jsonResponse.current.humidity,
        feelsLike: jsonResponse.current.feelslike_c,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (eve) => {
    setCity(eve.target.value);
  };
  let Submit = async (eve) => {
    try {
      eve.preventDefault();

      let newInfo = await weatherInfo();
      if (newInfo) {
        // ✅ Prevents updating state with `undefined`
        updateInfo(newInfo);
      }
      setCity("");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      <h3>Search</h3>
      <form onSubmit={Submit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          value={city}
          required
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        {/* takay ya form submit ho sakay */}
        <Button variant="contained" type="submit">
          Send
        </Button>
        <br></br>
        {error && <p style={{ color: "red" }}>"No such place in our API."</p>}
      </form>
    </div>
  );
}
