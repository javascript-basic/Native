import * as React from "react";
import { Button, Text, View } from "react-native";
import { Fab, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
const AddTodoButton = ({ onPress }) => (
  <Fab
    direction="up"
    containerStyle={{}}
    style={{
      backgroundColor: "#ffff",
    }}
    position="bottomRight"
    onPress={onPress}
  >
    <MaterialIcons
      name="add"
      style={{ color: "#FF8000", fontSize: 40, paddingTop: 12 }}
    />
  </Fab>
);

export function TasksDetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}
export function TasksScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <AddTodoButton />
    </View>
  );
}
