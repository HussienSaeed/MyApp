import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import ImgCard from "./card";

const path = "https://image.tmdb.org/t/p/original";
export default MovieDetails = ({ route }) => {
  const { id } = route.params;


  const [movies, setMovies] = useState({});

  getMovies(id);
  function getMovies(id) {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=364d5c60ab33326723502b1a258dcb4a&language=en-US"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }


  return (
    <View style={styles.container}>
      <Image
        source={{ uri: path + movies.poster_path }}
        style={{
          width: 200,
          height: 350,
          borderRadius: 20,
          margin: 10,
          elevation: 40,
        }}
      />

      <View style={{ color: "red" }}>
        <Text>
          <Text
            style={{
              margin: 10,
              color: "yellow",
              fontWeight: "bold",
              alignItems: "center",
						  elevation: 40,
			  fontSize:20
            }}
          >
            {movies.original_title}
          </Text>
        </Text>
        <Text style={{ margin: 10, color: "white" }}>
          <Text style={{ fontWeight: "bold", color: "yellow" }}>
            Over View :{" "}
          </Text>{" "}
          {movies.overview}
        </Text>
        <Text style={{ margin: 10, color: "white" }}>
          <Text style={{ fontWeight: "bold", color: "yellow" }}>
            Vote average :{" "}
          </Text>{" "}
          {movies.vote_average}
        </Text>
        <Text style={{ margin: 10, color: "white" }}>
          <Text style={{ fontWeight: "bold", color: "yellow" }}>
            Release date :{" "}
          </Text>{" "}
          {movies.release_date}
        </Text>
        <Text style={{ margin: 10, color: "white" }}>
          <Text style={{ fontWeight: "bold", color: "yellow" }}>
            Tagline :{" "}
          </Text>{" "}
          {movies.tagline}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //   marginTop:60,
    flex: 1,
    backgroundColor: "#223343",
    // alignItems: "center",
    // justifyContent: "flex-start",
		color: "white",
	padding:8
  },
});
