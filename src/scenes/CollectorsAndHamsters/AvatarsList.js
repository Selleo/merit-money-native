import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text } from 'react-native'

import Avatar from 'src/components/Avatar'
import { white } from 'src/styles/colors'
export default class AvatarsList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Dominik{'\n'} Duda</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Jak{'\n'}Smiesz</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Bartłomiej{'\n'}Wójtowicz</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Grzegorz{'\n'}aaaaa</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Panie{'\n'}Janie</Text>
        </View>
        <View style={styles.userContainer}>
          <Avatar size={80} />
          <Text style={styles.name}>Rano{'\n'}Wstań</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userContainer: Platform.select({
    android: {
      paddingHorizontal: 10,
    },
    ios: {
      paddingHorizontal: 15,
    },
  }),
  name: {
    paddingVertical: 5,
    color: white,
    textAlign: 'center',
  },
})
