import React from 'react';
import FormLogin from './src/containers/FormLogin';
import FormCadastro from './src/containers/FormCadastro';
import HomePage from './src/components/HomePage';
import LandingPage from './src/containers/LandingPage';
import { Router, Scene } from 'react-native-router-flux';

const routes = (props) => (
  <Router>
    <Scene key='root' title='Hangô' >
      <Scene key="formLogin" component={FormLogin} title="Login" hideNavBar={true} />
      <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false} />
      <Scene key='homePage' component={HomePage} title="Home Page" hideNavBar={true} />
      <Scene key='landingPage' component={LandingPage} title="Festas" hideNavBar={true} />
    </Scene>
  </Router>
);

export default routes;