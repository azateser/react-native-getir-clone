import React from 'react'

import { View, Text, Image, StatusBar} from 'react-native'
import styles from './styles'

import { Entypo } from '@expo/vector-icons'


const HeaderMain = () => {
  return (
    <View>
      <View style={styles.headerMain}>
        <View style={styles.headerOne}>
            <View style={styles.headerOneView}>
                <Text style={{fontWeight: '600', fontSize: 16, color:'#5d3ebc'}}>Ev,</Text>
                <Text style={{fontWeight: '500', fontSize: 12, color:"#0a111b", marginLeft: 6, marginRight: 1}}>Dedepaşa Blv. Yenişehir Mahallesi Apart...</Text>
                <Entypo name='chevron-down' size={20} color='#5d3ebc' />
            </View>
        </View>
            <View style={styles.headerTwo}>
                <Text style={{fontWeight: '500', fontSize: 10, color: "#5d3ebc", marginBottom: 4}}>TVS</Text>
                <Text style={{fontWeight: '700', fontSize: 14, color: "#5d3ebc"}}>20-30 dk</Text>
            </View>
      </View>
    </View>
  )
}

export default HeaderMain