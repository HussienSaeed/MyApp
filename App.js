import { NavigationContainer } from "@react-navigation/native";

import Movies from "./movieApp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./HomePage";
import Page1 from "./Page1";
import Page2 from "./Page2";
import MyCamera from "./myCamera";
import ImagePickerExample from "./ImagePicker";
import ScreenCaptureExample from "./ScreenCapture";
import MovieDetails from "./MovieDetails";
import Calender from "./Calender";
import BatteryComponent from "./Battery";
import CheckboxComponent from "./Checkbox";
import ContactComponent from "./Contact";
import LocationComponent from "./Location";
import PermissionsButton from "./TaskManager";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //   <View style={styles.container}>
    //  <Movies/>
    //   </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MY App" component={HomePage} />
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="myCamera" component={MyCamera} />
        <Stack.Screen name="imagePicker" component={ImagePickerExample} />
        <Stack.Screen name="screenCapture" component={ScreenCaptureExample} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Movie details" component={MovieDetails} />
        <Stack.Screen name="calender" component={Calender} />
        <Stack.Screen name="battery" component={BatteryComponent} />
        <Stack.Screen name="checkbox" component={CheckboxComponent} />
        <Stack.Screen name="contact" component={ContactComponent} />
        <Stack.Screen name="location" component={LocationComponent} />
        <Stack.Screen name="taskmanager" component={PermissionsButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



