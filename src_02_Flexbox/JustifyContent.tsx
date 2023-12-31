import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View style={{ marginTop: 40 }}>
                <Text style={[styles.h2]}> 项目在主轴上的对齐方式 </Text>
                <ScrollView>
                    <Text style={[styles.h3]}> justifyContent: 'flex-start'（默认） </Text>
                    <View style={[styles.continue, styles.flexRow, styles.justifyContentStart]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> justifyContent: 'center' </Text>
                    <View style={[styles.continue, styles.flexRow, styles.justifyContentCenter]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> justifyContent: 'flex-end' </Text>
                    <View style={[styles.continue, styles.flexRow, styles.justifyContentEnd]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> justifyContent: 'space-around' </Text>
                    <View style={[styles.continue, styles.flexRow, styles.justifyContentAround]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> justifyContent: 'space-evenly' </Text>
                    <View style={[styles.continue, styles.flexRow, styles.justifyContentEvenly]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
                    </View>
                    <Text style={[styles.h3]}> justifyContent: 'space-between' </Text>
                    <View style={[styles.continue, styles.flexRow, styles.justifyContentBetween]}>
                        <Text style={[styles.itemBase]}>刘备</Text>
                        <Text style={[styles.itemBase]}>关羽</Text>
                        <Text style={[styles.itemBase]}>张飞</Text>
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
    },
    justifyContentStart: {
        justifyContent: 'flex-start'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    justifyContentEnd: {
        justifyContent: 'flex-end'
    },
    justifyContentAround: {
        justifyContent: 'space-around'
    },
    justifyContentEvenly: {
        justifyContent: 'space-evenly'
    },
    justifyContentBetween: {
        justifyContent: 'space-between'
    }
})
