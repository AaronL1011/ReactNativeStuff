import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
  View
} from 'react-native';

const TaskInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='New Goal'
        style={styles.textInput}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (inputValue) {
            onSubmit(inputValue);
            setInputValue('');
          } else {
            Alert.alert('Please enter a new task!');
          }
        }}
      >
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    height: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlignVertical: 'center',
    fontSize: 24,
    marginTop: 5,
    marginRight: 10,
    flexGrow: 1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});

export default TaskInput;
