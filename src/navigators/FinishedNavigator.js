import * as React from "react";
import { Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
class FinishedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Finished Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class FinishedDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const DeleteStack = createStackNavigator();
function FinishedStackScreen() {
  return (
    <DeleteStack.Navigator>
      <DeleteStack.Screen
        name="Công Việc Đã Hoàn Thành"
        component={FinishedScreen}
      />
      <DeleteStack.Screen name="Details" component={FinishedDetailsScreen} />
    </DeleteStack.Navigator>
  );
}
export default FinishedStackScreen;
