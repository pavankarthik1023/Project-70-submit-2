import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import * as firebase from 'firebase'
import db from '../config';


export default class WriteScreen extends React.Component {
  constructor()
  {
    super()
    this.state={
      Author:'',
      Title:'',
      Story:'',
      ButtonState:'normal',
    }
  }

  Submit=async()=>
  { 
    this.setState({ButtonState:'Pressed'})
    db.collection("Writers").add({
      'Author':this.state.Author,
      'Title':this.state.Title,
      'Story':this.state.Story,
    })
   
  }

  Clear=()=>
  {
    this.setState({
      Author:'',
      Title:'',
      Story:'',
      ButtonState:'normal',
    })
  }

    render(){
    return (

      <View>
        <Header
    centerComponent={{text:'STORY HUB', style: { color: '#fff', fontSize: 20 }}}
    />
        <View>
          <TextInput
          style={styles.inputBox}
          placeholder="Title"
          onChangeText={(text) => {
            this.setState({ Title: text });
          }}
          value={this.state.Title}
        />
        </View>

        <View>
          <TextInput
          style={styles.inputBox}
          placeholder="Author"
          onChangeText={(text) => {
            this.setState({ Author: text });
          }}
          value={this.state.Author}
        />
        </View>

        <View>
          <TextInput
          style={styles.storyBox}
          placeholder="Story"
          onChangeText={(text) => {
            this.setState({ Story: text });
          }}
          value={this.state.Story}
        />
        </View>

        <TouchableOpacity style={styles.submitButton}
        onPress={async()=>
        {
          this.Submit()
        }}
        > <Text style={styles.submitbuttonText}>SUBMIT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton}
        onPress={async()=>{
          this.Clear()
        }}
        ><Text style={styles.submitbuttonText}>CLEAR</Text>
          </TouchableOpacity>
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
    inputBox: {
      marginTop: 30,
      width: '20%',
      alignSelf: 'left',
      height: 40,
      textAlign: 'center',
      borderWidth: 3,
      outline: 'none',
    },
    storyBox: {
      width: '200%',
      alignSelf: 'left',
      height: 400,
      textAlign:'auto',
      borderWidth: 3,
      outline: 'none',
      justifyContent:'center',
      fontSize:20,
    },
    submitButton:
    {
        backgroundColor:'teal',
        width:100,
        height:50,
        justifyContent:'center',
        borderWidth:2,
        marginLeft:100,
        alignItems:'center',
        marginTop:50,
    },
    submitbuttonText:
    {
        fontSize:20,
        textAlign:'center',
        color:'white',
    },
    
  });
  