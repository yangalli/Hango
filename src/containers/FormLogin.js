import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as AuthAction from '../store/actions/index';

class FormLogin extends Component {
  render() { 
    return ( 
      <View style={styles.containerLogin} >
        <View style={styles.divTitle}>
          <Text style={styles.title}>Hangô</Text>
        </View>

        <View style={styles.divInputs}>
          <TextInput 
            value={this.props.email} 
            onChangeText={this.props.onModifyEmail} 
            style={styles.email} 
            placeholder="e-mail">
          </TextInput>
          <TextInput 
            value={this.props.password}
            onChangeText={this.props.onModifyPassword}
            style={styles.password} 
            placeholder="senha">
          </TextInput>
          <TouchableHighlight onPress={() => Actions.formCadastro()}>
            <Text style={styles.register}>Ainda não possui cadastro? Cadastre-se</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.divButton}>
          <Button title="Acessar" onPress={() => false}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    padding: 10
  },
  divTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25
  },
  divInputs: {
    flex: 2
  },
  email: {
    fontSize: 20,
    height: 45
  },
  password: {
    fontSize: 20,
    height: 45
  },
  register: {
    fontSize: 18
  },
  divButton: {
    flex: 2
  },

});

const mapStateToProps = state => {
  return {
    email: state.AuthReducer.email,
    password: state.AuthReducer.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModifyEmail: (text) => {
      dispatch(AuthAction.modifyEmail(text))
    },
    onModifyPassword: (text) => {
      dispatch(AuthAction.modifyPassword(text))
    },
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);