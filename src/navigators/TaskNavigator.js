import * as React from "react";
import { Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
class TasksScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Tasks Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class TasksDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const TaskStack = createStackNavigator();
function TasksStackScreen() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen name="Công Việc Đang Làm" component={TasksScreen} />
      <TaskStack.Screen name="Details" component={TasksDetailsScreen} />
    </TaskStack.Navigator>
  );
}
export default TasksStackScreen;
