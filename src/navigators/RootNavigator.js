import * as React from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListStackScreen from "./ListNavigator";
import FinishedStackScreen from "./FinishedNavigator";
import TasksStackScreen from "./TaskNavigator";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "List") {
              return (
                <Ionicons
                  name={focused ? "ios-list-box" : "ios-list"}
                  size={size}
                  color={"blue"}
                />
              );
            } else if (route.name === "Tasks") {
              return (
                <AntDesign
                  name={focused ? "solution1" : "solution1"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Finished") {
              return (
                <Feather
                  name={focused ? "user-check" : "user-check"}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen name="List" component={ListStackScreen} />
        <Tab.Screen name="Tasks" component={TasksStackScreen} />
        <Tab.Screen name="Finished" component={FinishedStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
