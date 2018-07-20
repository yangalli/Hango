import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as AuthAction from '../store/actions/index';

class FormCadastro extends Component {
  state = {

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
            placeholder="e-mail">
          </TextInput>
          <TextInput 
            value={this.props.password}
            onChangeText={this.props.onModifyPassword} 
            style={styles.password} 
            placeholder="senha">
          </TextInput>
        </View>

        <View style={styles.divButton}>
          <Button title="Cadastrar" onPress={() => false}></Button>
        </View>
      </View>
    );
  }
}

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

});

const mapStateToProps = state => {
  return {
    name: state.AuthReducer.name,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCadastro);  