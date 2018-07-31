import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, ImageBackground, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as AuthAction from '../store/actions/index';

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
  erro: {
    color: '#ff0000',
    fontSize: 18
  }
});

class FormLogin extends Component {

  renderBtnAccess() {
    const { email, password } = this.props;
    if (this.props.loading) {
      return (
        <ActivityIndicator size="large"/>
      )
    }
    return(
      <Button title="Acessar" onPress={() => this.props.onAuthenticateUser({ email, password })}></Button>
    )
  }

  render() { 
    
    return ( 
      //<ImageBackground style={{flex: 1, width: null}} source={require('')} >
        <View style={styles.containerLogin} >
          <View style={styles.divTitle}>
            <Text style={styles.title}>Hangô</Text>
          </View>

          <View style={styles.divInputs}>
            <TextInput 
              value={this.props.email} 
              onChangeText={this.props.onModifyEmail} 
              style={styles.email} 
              placeholder="e-mail"
              placeholderTextColor='#fff'>
            </TextInput>
            
            <TextInput 
              value={this.props.password}
              onChangeText={this.props.onModifyPassword}
              secureTextEntry
              style={styles.password} 
              placeholder="senha"
              placeholderTextColor='#fff'>
            </TextInput>

            <Text style={styles.erro}>{this.props.loginError}</Text>

            <TouchableHighlight onPress={() => Actions.formCadastro()}>
              <Text style={styles.register}>Ainda não possui cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.divButton}>
            {this.renderBtnAccess()}
          </View>
        </View>
      //</ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    loginError: state.AuthReducer.loginError,
    loading: state.AuthReducer.loading
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
    onAuthenticateUser: ({ email, password }) => {
      dispatch(AuthAction.authenticateUser(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);