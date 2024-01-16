import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert } from 'react-native'

export default class index extends Component {

    createTwoButtonAlter = () => {
        Alert.alert('title', 'content', [
            { text: 'cancel', onPress: () => { console.log('Cancel') }, style: 'cancel' },
            { text: 'confirm', onPress: () => { console.log('Confirm') }, style: 'default' }
        ]);
    };
    createThreeButtonAlter = () => {
        Alert.alert('title', 'content', [
            { text: 'cancel', onPress: () => { console.log('Cancel') }, style: 'cancel' },
            { text: 'confirm', onPress: () => { console.log('Confirm') }, style: 'default' },
            { text: 'after', onPress: () => { console.log('after') }, style: 'destructive' }
        ],
            {
                cancelable: true,
                onDismiss: () => {
                    console.log('alter dismiss.')
                }
            })
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Button
                    title='Alter.alter'
                    onPress={() => {
                        Alert.alert('我是一个按钮')
                    }}></Button>
                <Button
                    title='Alter.prompt'
                    onPress={() => {
                        Alert.prompt('这是一个提示')
                    }}></Button>
                <Button
                    title='两个按钮'
                    onPress={() => {
                        this.createTwoButtonAlter()
                    }}
                    color={'red'}
                ></Button>
                <Button
                    title='三个按钮'
                    onPress={this.createThreeButtonAlter}
                    color={'tomato'}
                ></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0000ff0f'
    }
})
