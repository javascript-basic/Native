import * as React from "react";
import { Button, Text, View } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListScreen, ListDetailsScreen } from "./ListNavigator";
import { FinishedScreen, FinishedDetailsScreen } from "./FinishedNavigator";
import { TasksScreen, TasksDetailsScreen } from "./TaskNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const ListStack = createStackNavigator();
function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={ListScreen} />
      <ListStack.Screen name="Details" component={ListDetailsScreen} />
    </ListStack.Navigator>
  );
}
const TaskStack = createStackNavigator();
function TasksStackScreen() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="Tasks"
        component={TasksScreen}
        style={{ background: "#FF8000" }}
      />
      <TaskStack.Screen name="Details" component={TasksDetailsScreen} />
    </TaskStack.Navigator>
  );
}
const DeleteStack = createStackNavigator();
function FinishedStackScreen() {
  return (
    <DeleteStack.Navigator>
      <DeleteStack.Screen name="Finished" component={FinishedScreen} />
      <DeleteStack.Screen name="Details" component={FinishedDetailsScreen} />
    </DeleteStack.Navigator>
  );
}
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
                  color={color}
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
                  name={focused ? "check" : "user-check"}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Tasks" component={TasksStackScreen} />
        <Tab.Screen name="Finished" component={FinishedStackScreen} />
        <Tab.Screen name="List" component={ListStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//Tạo thông báo
// function IconWithBadge({ name, badgeCount, color, size }) {
//     return (
//       <View style={{ width: 24, height: 24, margin: 5 }}>
//         <Ionicons name={name} size={size} color={color} />
//         {badgeCount > 0 && (
//           <View
//             style={{
//               // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
//               position: "absolute",
//               right: -6,
//               top: -3,
//               backgroundColor: "red",
//               borderRadius: 6,
//               width: 12,
//               height: 12,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
//               {badgeCount}
//             </Text>
//           </View>
//         )}
//       </View>
//     );
//   }

//   function ListIconWithBadge(props) {
//     // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
//     return <IconWithBadge {...props} badgeCount={5} />;
//   }
