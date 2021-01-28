import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (newGoalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: newGoalTitle
      }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => currentGoals.filter((goal) => goal.id !== goalId))
  }

  return (
    <View style={styles.screen}>
      <Button title='Add Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput show={isAddMode} onAddGoal={addGoalHandler} onCancel={() => setIsAddMode(false)} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals}
        renderItem={(goal) => <GoalItem goal={goal.item.value} id={goal.item.id} onDelete={removeGoalHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});
