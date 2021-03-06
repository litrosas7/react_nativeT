/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  BackAndroid
} from 'react-native';

import Dashboard from './Components/Dashboard';
import Main from './Components/Main';
import Profile from './Components/Profile';
import Repositories from './Components/Repositories';
import Web from './Components/Helpers/Web';
import Notes from './Components/Notes';


const routes = [
  {name: 'First Scene', id: 0},
  {name: 'Main Scene', id: 1},
];

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

var navigator;

export default class Project extends Component {
  render() {
    return (
      <Navigator
        ref={(nav) => { navigator = nav; }}
        initialRoute={routes[0]}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route, routeStack) =>   Navigator.SceneConfigs.FadeAndroid}
      />
    );
  }
  
renderScene(route,navigator){
  var routeIndex = route.id;

  switch(route.id){
    case 0:
        return(
          <View style={{padding:20}}>
            <Text>{route.name}</Text>
            <TouchableOpacity onPress={() => {
                navigator.push(routes[1]);
            }}>
              <Text>Go route 2</Text>
            </TouchableOpacity>
          </View>
        );
  break;
  case 1:
        return(
          <Main navigator={navigator} />
        );
    break;
    case 3:
        return(
          <Dashboard navigator={navigator} userInfo={route.passProps}/>
        );
    break;
    case 4:
        return(
          <Profile navigator={navigator} userInfo={route.passProps}/>
        );
    break;
    case 5:
        return(
          <Repositories navigator={navigator} userInfo={route.userInfo} repos={route.repos}/>
        );
    break;
    case 6:
        return(
          <Web navigator={navigator} url={route.passProps}/>
        );
    break;
    case 7:
        return(
           <Notes navigator={navigator} userInfo={route.userInfo} notes={route.notes}/>
        );
    break;
      default:
  }
  
  return(
      <View style={{padding:20}}>
        <Text>{route.name}</Text>
        <TouchableOpacity onPress={() => {
          if (routeIndex === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
          <Text>Go route 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('Project', () => Project);
