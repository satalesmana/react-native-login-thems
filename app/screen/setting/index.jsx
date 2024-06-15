import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
  Image
} from 'react-native';
import {AI} from '../../../assets'

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserNim, setPassword, resetRegisterData,setUserProdi,setUserkelasCode,setUserTelp} from '../../store/reducer/registerReducer';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for eye icon
import ApiLib from "../../lib/ApiLib"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SettingScreen() {

    return (
     
        <View
          style={{windowWidth:windowWidth,windowHeight:windowHeight,backgroundColor:'#F0EBE3' }}>

          <View style={{windowWidth:windowWidth,height:70,backgroundColor:'#FEFAF6'}}>
          <Text style={{fontSize:24,fontWeight:'900',marginTop:30,left:15}}>Account Settings</Text>
          </View>
         
          <View style={{marginTop:10,backgroundColor:'#F6F5F2',windowWidth:windowWidth,height:100,flex:1,}}>
<Image  source={AI} style={{}} />

<Text>  </Text>
          </View>
          </View>
        
      );
}