import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/styles';
const IconButton = ({icon,size,color,onPress}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
        <View style={styles.buttonContainer}>
            <Ionicons name={icon} size={size} color={color} />
        </View>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:4,
        backgroundColor:GlobalStyles.COLORS.secondary,
    },
    pressed:{
        opacity:0.75,
    }
});