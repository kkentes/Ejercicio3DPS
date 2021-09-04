import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  state = {

    text1:'',
    text2:'',
    resultado:'0'};

    Calcular(valor1, valor2, valor3, valor4)
    {
      if(valor1 > 0 && valor2 > 0 && valor3 > 0 && valor4 > 0)
      {
        var a=parseFloat(valor1);
        var b=parseFloat(valor2);
        var c=parseFloat(valor3);
        var d=parseFloat(valor4);

        let numeros = [a, b, c, d]

        var H = parseFloat(Math.max(...numeros));
        var J = parseFloat(Math.min(...numeros));

        if( J > 10 )
        {
          var X = H + 10;
          this.setState({resultado: "Numero mayor " + H + " + 10 = " + X + " Porque el numero menor " + J + " > 10 "});

        }

        else if( H < 50)
        {
          var Y = J - 5;
          this.setState({resultado: "Numero Menor " + J + " - 5 = " + Y + " Porque el numero mayor " + H + " < 50 "});

        }

        else
        {
          this.setState({resultado: " Mayor = "+ H + " Menor = " + J });
        }

      }
      else
      {
      this.setState({resultado: 'Error!! solo se aceptan numeros mayores que cero...'});
      }
    }

    render(){

      return (
      <View style={{flex:1,padding: 10,fontSize:24}}>
      <Text style={{padding: 15, fontSize: 24,backgroundColor: 'orange', color: 'white', textAlign:'center'}}>
      Numero mayor y menor
      </Text>

      <TextInput
      style={{height:40,borderColor:'green', borderWidht:2,padding:5,marginTop:10}}
      placeholder="Valor 1"
      onChangeText={(text1) => this.setState({text1})}
      keyboardType='numeric'
      />

      <TextInput
      style={{height: 40,borderColor:'green',borderWigth:2,padding:5,marginTop:5}}
      placeholder="Valor 2"
      onChangeText={(text2) => this.setState({text2})}
      keyboardType='numeric'
      />

      <TextInput
      style={{height: 40,borderColor:'green',borderWigth:2,padding:5,marginTop:5}}
      placeholder="Valor 3"
      onChangeText={(text3) => this.setState({text3})}
      keyboardType='numeric'
      />

      <TextInput
      style={{height: 40,borderColor:'green',borderWigth:2,padding:5,marginTop:5}}
      placeholder="Valor 4"
      onChangeText={(text4) => this.setState({text4})}
      keyboardType='numeric'
      />

      <TouchableOpacity
      style={{height: 60,backgroundColor:'blue',marginTop:10,alignContent:'center',alignItems:'center',textAlignVertical:'center'}}
     onPress={() =>{
       this.Calcular(this.state.text1,this.state.text2,this.state.text3,this.state.text4);
     }} 
     >
     <Text style={{color:'white',fontSize:24,textAlingVertical:'center',textAling:'center'}}>Calcular</Text>
     </TouchableOpacity>
     
     <Text style={{padding: 10, fontSize: 32 }}>
     {this.state.resultado}
     </Text>
     </View>

     
     );
    }
}
