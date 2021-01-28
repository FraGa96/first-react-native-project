import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = ({ id, goal, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.goal}>
        <Text>{goal}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  goal: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  }
})

export { GoalItem }