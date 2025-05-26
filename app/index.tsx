import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

export default function Index() {
  const [selectedTrigger, setSelectedTrigger] = useState('');
  const [selectedAction, setSelectedAction] = useState('');

  const dropdownItems = [
    { label: 'a', value: 'a' },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Are you ok?</Text>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>What should I track</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
          data={dropdownItems}
          labelField="label"
          valueField="value"
          placeholder="Select a tracker"
          value={selectedTrigger}
          onChange={item => setSelectedTrigger(item.value)}
        />

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Tracker</Text>
        </TouchableOpacity>

        <Text style={[styles.label, { marginTop: 32 }]}>What should I do?</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.dropdownText}
          containerStyle={{ backgroundColor: '#2A1A1A' }}
          itemTextStyle={{ color: '#fff', backgroundColor: '#2A1A1A' }}
          selectedTextStyle={{ color: '#fff', backgroundColor: '#2A1A1A', padding: 0 }}

          inputSearchStyle={{ backgroundColor: '#2A1A1A' }}
          itemContainerStyle={{ borderColor: 'blue', padding: 0 }}
          data={dropdownItems}
          labelField="label"
          valueField="value"
          placeholder="Select an action"
          value={selectedAction}
          onChange={item => setSelectedAction(item.value)}
        />

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Action</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1111', // very dark background
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#5C3F3F',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#2A1A1A',
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#2A1A1A',
    borderColor: '#5C3F3F',
  },
  addButton: {
    marginTop: 16,
    backgroundColor: '#3A2323',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#D35E71',
    paddingVertical: 16,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})
