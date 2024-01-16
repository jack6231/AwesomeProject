import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.itemBase]}>
            <Text style={[styles.h3]}>扫一扫</Text>
        </View>
        <View style={[styles.itemBase]}>
            <Text style={[styles.h3]}>付款码</Text>
        </View>
        <View style={[styles.itemBase]}>
            <Text style={[styles.h3]}>卡包</Text>
        </View>
        <View style={[styles.itemBase]}>
            <Text style={[styles.h3]}>出行</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemBase: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: Dimensions.get('window').width / 3 - 10*2,
        height: 30,
        borderColor: '#00f',
        borderWidth: 1
    },
    h3: {
        fontSize: 16
    }

})
