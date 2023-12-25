// rnc 快捷命令生成
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View>
                <Text style={{
                    marginTop: 40,
                    margin: 20,
                    backgroundColor: '#eee',
                    fontSize: 20
                }}> textInComponent </Text>
                <Text style={[styles.h1]}> Hello RN </Text>
                <Text style={[styles.h2]}> Hello RN </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})