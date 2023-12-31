import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View style={{ marginTop: 40, height: '100%'}}>
                <Text style={[styles.h2]}> 主轴方向 </Text>
                <ScrollView>
                    <Text style={[styles.h3]}> flexRow 1:1:1） </Text>
                    <View style={[styles.continue, styles.flexRow]}>
                        <Text style={[styles.itemBase, {flex: 1}]}>刘备</Text>
                        <Text style={[styles.itemBase, {flex: 1}]}>关羽</Text>
                        <Text style={[styles.itemBase, {flex: 1}]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> flexRow 1:2:3 </Text>
                    <View style={[styles.continue, styles.flexRow]}>
                        <Text style={[styles.itemBase, {flex: 1}]}>刘备</Text>
                        <Text style={[styles.itemBase, {flex: 2}]}>关羽</Text>
                        <Text style={[styles.itemBase, {flex: 3}]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> flexDirection: 'row' </Text>
                    <View style={[styles.continue, styles.flexColumn]}>
                        <Text style={[styles.itemBase, {flex: 1}]}>刘备</Text>
                        <Text style={[styles.itemBase, {flex: 1}]}>关羽</Text>
                        <Text style={[styles.itemBase, {flex: 1}]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> flexDirection: 'row-reverse' </Text>
                    <View style={[styles.continue, styles.flexColumn]}>
                        <Text style={[styles.itemBase, {flex: 1}]}>刘备</Text>
                        <Text style={[styles.itemBase, {flex: 2}]}>关羽</Text>
                        <Text style={[styles.itemBase, {flex: 3}]}>张飞</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    continue: {
        height: 150,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    h2: {
        fontSize: 30,
        marginHorizontal: 10
    },
    h3: {
        fontSize: 24,
        marginHorizontal: 10
    },
    itemBase: {
        height: 30,
        borderWidth: 1,
        borderColor: '#f00',
        backgroundColor: '#0ff',
        padding: 4,
        margin: 2,
        textAlign: 'center'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse'
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexRowReverse: {
        flexDirection: 'row-reverse'
    }
})
