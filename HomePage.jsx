import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons";



export const HomePage = (props) => {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Home</Text>
          <Text
            style={{ marginTop: 5, padding: 10, color: "yellow", fontSize: 18 }}
          >
            Movie
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Movies");
            }}
          >
            <View style={styles.btn}>
              <MaterialIcons name="movie" color="white" size={50} />
            </View>
          </TouchableOpacity>
          <Text
            style={{ marginTop: 5, padding: 10, color: "yellow", fontSize: 18 }}
          >
            Calendar
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("calender");
            }}
          >
            <View style={styles.btn}>
              <MaterialIcons name="calendar-today" color="white" size={50} />
            </View>
          </TouchableOpacity>
          <Text
            style={{ marginTop: 5, padding: 10, color: "yellow", fontSize: 18 }}
          >
            Battery
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("battery");
            }}
          >
            <View style={styles.btn}>
              <MaterialIcons
                name="battery-charging-full"
                color="white"
                size={50}
              />
            </View>
          </TouchableOpacity>
          <Text
            style={{ marginTop: 5, padding: 10, color: "yellow", fontSize: 18 }}
          >
            Check - Box
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("checkbox");
            }}
          >
            <View style={styles.btn}>
              <MaterialIcons name="check" color="white" size={50} />
            </View>
          </TouchableOpacity>
          <Text
            style={{ marginTop: 5, padding: 10, color: "yellow", fontSize: 18 }}
          >
            Contact
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("contact");
            }}
          >
            <View style={styles.btn}>
              <MaterialIcons name="contacts" color="white" size={50} />
            </View>
          </TouchableOpacity>
          <Text
            style={{ marginTop: 5, padding: 10, color: "yellow", fontSize: 18 }}
          >
            Location
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("location");
            }}
          >
            <View style={styles.btn}>
              <MaterialIcons name="my-location" color="white" size={50} />
            </View>
          </TouchableOpacity>
          <Text
            style={{ marginTop: 5, padding: 10, color: "yellow", fontSize: 18 }}
          >
            Task Manager
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("taskmanager");
            }}
          >
            <View style={styles.btn}>
              <MaterialIcons name="add-task" color="white" size={50} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223343",
    alignItems: "flex-start",

    // marginTop: 60,
  },
  btn: {
    backgroundColor: "black",
    height: 80,
    width: 80,
    borderRadius: 20,
    elevation: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 10,
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    // textAlign: "center",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
