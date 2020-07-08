import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const ListItem = ({ id, text, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.listItem} on>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default ListItem;
