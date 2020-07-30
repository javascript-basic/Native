import * as React from "react";
import { Button, Text, View, ScrollView, StyleSheet } from "react-native";
import AddTodoButton from "./../component/AddTodoButton";
import AddTodo from "./../component/AddTodo";
import { createStackNavigator } from "@react-navigation/stack";

class ListScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>List Screen</Text>

        <AddTodoButton
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class ListDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
const ListStack = createStackNavigator();
function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="Danh Sách Công Việc"
        component={ListScreen}
        options={{
          headerStyle: {
            backgroundColor: "#81BEF7",
          },
          // cardStyle: {
          //   backgroundColor: "#F7BE81",
          // },
        }}
      />
      <ListStack.Screen name="Details" component={ListDetailsScreen} />
    </ListStack.Navigator>
  );
}
export default ListStackScreen;
