import { Avatar } from "@react-native-material/core";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ImgCard(props) {
	return (
    <View style={styles.container}>
      <Avatar
        size={70}
        style={{ marginTop: 18, marginStart: 15}}
        image={{ uri: props.imgLink }}
      />
      {/* <Image source={{ height: 200, width: 200, uri: props.imgLink }} /> */}

      <Text style={{ marginTop: 10, padding: 20, color: "white" }}>
        {props.mvName}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent:'center'
    }
})