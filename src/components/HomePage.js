import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  divTitulo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 20
  },
  divText: {
    flex: 1
  }
})

class HomePage extends Component {
  state = {  }
  render() { 
    return (  
      <View style={styles.container}>
        <View style={styles.divTitulo}>
          <Text style={styles.titulo}>Seja Bem Vindo!</Text>
        </View>
        <View style={styles.divText}>
          <Button title="Faça o Login" onPress={() => Actions.formLogin()} />
        </View>
      </View>
    );
  }
}
 
export default HomePage;
