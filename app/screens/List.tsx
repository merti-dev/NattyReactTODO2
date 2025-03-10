import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIRESTORE_DB } from '../../firebaseConfig'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'


const List = ({navigation}: any) => {
const [todos, setTodos] = useState<any[]>([])
const[todo, setTodo] = useState("")

useEffect(()=>{
  const todoRef = collection(FIRESTORE_DB, "todos")
  const subscriber = onSnapshot(todoRef, (querySnapshot) => {
    const todos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    setTodos(todos)
  }
  )
  return subscriber
}, [])

const addTodo = async () => {   
    await  addDoc(collection(FIRESTORE_DB, "todos"), { title:'todo', done : false, createdAt: new Date(), content : todo
    });
    setTodo('')
}

  return (
    <View style={styles.container}>
     <View style={styles.form}>
      <TextInput style={styles.input} placeholder='Add Todo' value={todo} onChangeText={(text:string)=>setTodo(text)} />
      <Button title='Add Todo' onPress={addTodo} disabled={todo == ''} />
      </View>
      
      <Text style={{marginBottom: 10}}>Todo List</Text>
      {todos.map((todo) => (
        <View key={todo.id} style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
          <Text>{todo.content}</Text>
          <Button title='Delete' onPress={() => {}} />
        </View>
      ))}
    </View>
  )
}

export default List

const styles = StyleSheet.create({
container: {
 marginHorizontal: 20,
},
form: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
},
input:{
  flex: 1,
  borderWidth: 1,
  borderColor: 'black',
  padding: 10,
  marginRight: 10,
  backgroundColor:'#fff',
  borderRadius: 5,
}
})