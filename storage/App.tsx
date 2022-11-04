import { View, Text , SafeAreaView , TextInput , Button } from 'react-native'
import React from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage'
const App = () => {
  const [text , setText] = React.useState('')


   const saveMe =async () => {
    try {
      AsyncStorage.setItem('user' , text)
    } catch (error) {
       console.log(error)
    }
   }

  const getName =async () => {
    try{
    const data : any = await  AsyncStorage.getItem('user')
    setText(data)
    } catch (error){
      console.log(error)
    }
  }

  const deleteMe = async () => {
   AsyncStorage.removeItem('user')
   setText('')
  }

   React.useEffect(()=>{
     getName()
   },[])
  return (
    <SafeAreaView>
    <View style={{padding : 100 , paddingHorizontal : 20}}>
        <View style={{height : 50 ,
         borderColor : 'blue' , borderWidth : 1 , justifyContent : 'center' , paddingHorizontal : 20}}>
        <TextInput value={text} placeholder='name' onChangeText={(val)=>setText(val)} />
        </View>
      
      <Text style={{marginTop : 30 , fontWeight : 'bold' , fontSize : 15 , color : 'black',
      textAlign : 'center'}}>Name : {text}</Text>
    </View>
    <View style={{width : 200,marginLeft : 100}}>
       <Button  title='Save Name' color='skyblue' onPress={saveMe} />
    </View>

    <View style={{width : 200,marginLeft : 100 , marginTop : 20}}>
       <Button  title='Delete Name' color='skyblue'  onPress={deleteMe} />
    </View>
    </SafeAreaView>
  )
}

export default App