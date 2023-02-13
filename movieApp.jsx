import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ImgCard from "./card";

const apiKey = "364d5c60ab33326723502b1a258dcb4a";
const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=";
const path = "https://image.tmdb.org/t/p/original";

const apiUrl = url + apiKey;

export default function Movies({ navigation }) {
	const [movies, setMovies] = useState([]);



	async function getData(setMovies) {
		let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=364d5c60ab33326723502b1a258dcb4a")
		// console.log(res)
		setMovies(data.results)
	
	}
    
	getData(setMovies)

	return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie App</Text>
      <ScrollView>
        {movies.map((movie, i) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(`Movie details`, { id: movie.id });
              }}
            >
              <ImgCard
                key={movie.id}
                mvName={movie.title}
                imgLink={path + movie.poster_path}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223343",
    alignItems: "center",
		justifyContent: "center",
	
    // marginTop: 60,
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});