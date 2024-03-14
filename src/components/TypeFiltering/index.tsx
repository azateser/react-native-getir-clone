import React, { useState } from 'react'
import { ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native'

const {height,width} = Dimensions.get('window')

const TypeBox = ({item, active, setCat}:{item:String, active:String, setCat: any}) => {
return(
    <TouchableOpacity
    onPress={() => setCat(item)}
    style={[{flexDirection: 'row', alignItems: 'center' ,paddingHorizontal: 12, marginRight: 10, borderRadius: 6, height: height*0.044}, item == active ? {backgroundColor: '#5d3ebc'}:{borderColor: '#f0eff7', borderWidth: 1.2}]}
    >
        <Text
        style={[{fontSize: 12, color: '#7849F7', fontWeight: '600'}, item == active && {color: 'white'}]}
        >{item}</Text>
    </TouchableOpacity>
)
}

const TypeFiltering = () => {
  const [category, setCategory] = useState<String>("Birlikte İyi Gider")
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}
    bounces={true}
    horizontal={true}
    style={{width: '100%', backgroundColor: 'white', height:height*0.07, flexDirection: 'row', paddingVertical: height*0.014, paddingHorizontal: 12, borderBottomColor: '#edededfd', borderBottomWidth: 1,shadowRadius: 3.8, shadowOpacity:0.07 }}
    >
        {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar" ].map((item) => (
            <TypeBox setCat={setCategory} item={item} active={category} />
        ))}
    </ScrollView>
  )
}

export default TypeFiltering