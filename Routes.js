import React from 'react';
import FormLogin from './src/containers/FormLogin';
import FormCadastro from './src/containers/FormCadastro';
import { Router, Scene } from 'react-native-router-flux';

const routes = (props) => (
  <Router>
    <Scene key='root' title='Hangô' >
      <Scene key="formLogin" component={FormLogin} title="Login" />
      <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
    </Scene>
  </Router>
);

export default routes;