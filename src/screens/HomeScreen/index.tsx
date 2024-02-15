import { ScrollView, View} from 'react-native'

import HedaerMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'
import MainCategories from '../../components/MainCategories'

const HomeScreen = () => {
  return (
    <View>
    <HedaerMain />
    <ScrollView style={{backgroundColor: "#f5f5f5", minHeight: '100%'}}>
        <BannerCarousel />
        <MainCategories />
    </ScrollView>
    </View>
  )
}

export default HomeScreen