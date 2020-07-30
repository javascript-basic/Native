import * as React from "react";
import { Fab, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
const AddTodoButton = ({ onPress }) => (
  <Fab
    direction="up"
    containerStyle={{}}
    style={{
      backgroundColor: "#ffff",
      // opacity: 0.2,
    }}
    position="bottomRight"
    onPress={onPress}
  >
    <MaterialIcons
      name="add"
      style={{ color: "blue", fontSize: 40, paddingTop: 12 }}
    />
  </Fab>
);
export default AddTodoButton;
