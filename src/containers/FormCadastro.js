import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as AuthAction from '../store/actions/index';

const styles = StyleSheet.create({
  containerRegister: {
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
    flex: 4
  },
  name: {
    fontSize: 20,
    height: 45
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

class FormCadastro extends Component {
  
  renderBtnRegister() {
    const { name, email, password } = this.props;
    if (this.props.loading) {
      return (
        <ActivityIndicator size="large" />
      )
    }
    return (
      <Button title="Cadastrar" onPress={() => this.props.onRegisterUser({ name, email, password })}></Button>
    )
  }
  
  render() {
    return (
      <View style={styles.containerRegister} >
        <View style={styles.divTitle}>
          <Text style={styles.title}>Registre-se</Text>
        </View>

        <View style={styles.divInputs}>
          <TextInput 
            value={this.props.name}
            onChangeText={this.props.onModifyName} 
            style={styles.name} 
            placeholder="nome">
          </TextInput>
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
          <Text style={styles.erro}>{this.props.registerError}</Text>
        </View>

        <View style={styles.divButton}>
          {this.renderBtnRegister()}
        </View>

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.AuthReducer.name,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    registerError: state.AuthReducer.registerError,
    loading: state.AuthReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModifyName: (text) => {
      dispatch(AuthAction.modifyName(text))
    },
    onModifyEmail: (text) => {
      dispatch(AuthAction.modifyEmail(text))
    },
    onModifyPassword: (text) => {
      dispatch(AuthAction.modifyPassword(text))
    },
    onRegisterUser: ({ name, email, password }) => {
      dispatch(AuthAction.registerUser(name, email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCadastro);  