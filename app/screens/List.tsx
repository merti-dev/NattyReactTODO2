import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIRESTORE_DB } from '../../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'


const List = ({navigation}: any) => {
const [todos, setTodos] = useState<any[]>([])
const[todo, setTodo] = useState("")

const addTodo = async () => {   
    await  addDoc(collection(FIRESTORE_DB, "todos"), { title:'I am a 2', done : false
    });
}

  return (
    <View style={styles.container}>
      <Text>List</Text>
      <Button  title="add todo" onPress={() => addTodo() } /> 
    </View>
  )
}

export default List

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
})