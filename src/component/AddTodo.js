import * as React from "react";
import { Value } from "react-native-reanimated";
import { View, CheckBox, Body } from "native-base";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title,
      completed,
      createAt,
    };
  }
  onSubmit = () => {
    if (this.state.length > 0) this.props.onAdd(this.state);
    return null;
  };
  setStateUtil = (property, value) => {
    this.setState({
      [property]: value,
    });
  };
  render() {
    const { title, completed } = this.state;
    const { onBlur } = this.props;
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingRight: 10,
          paddingBottom: 5,
          paddingTop: 5,
        }}
      >
        <CheckBox
          checked={completed}
          onPress={() => this.setStateUtil("completed", "!completed")}
        />
        <Body
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingLeft: 25,
          }}
        >
          <TextInput
            style={{ width: "90%" }}
            blurOnSubmit
            underlineColor="transparent"
            placeholder="What need to be done?"
            autoFocus
            onSubmitEditing={this.onSubmit}
            onChangeText={(changedTitle) =>
              this.setStateUtil("title", changedTitle)
            }
            value={title}
            autoCorrect={false}
            autoCapitalize="none"
            onBlur={onBlur}
            underlineColorAndroid="transparent"
          />
        </Body>
        <TouchableOpacity
          onPress={() => this.props.onCancelDelete}
          style={{ paddingLeft: 25, paddingRight: 15 }}
        >
          <Ionicons name="ios-trash-outline" color={"grey"} size={23} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default AddTodo;
