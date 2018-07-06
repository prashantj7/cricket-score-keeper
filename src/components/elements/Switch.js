import React, { Component } from 'react'
import {
   View,
   Switch,
} 
from 'react-native'

const SwitchExample = (props) => {
   return (
   <Switch
      onValueChange = {props.toggleSwitch}
      value = {props.switchValue}/>
   )
}

export default SwitchExample;