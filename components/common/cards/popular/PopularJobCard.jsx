import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from "../../../../utils";
import { images } from '../../../../constants'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  const imageSrc=checkImageURL(item?.employer_logo)? {uri:item.employer_logo} : images.company;

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={()=> handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={imageSrc}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.companyName}>{item?.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)}>{item?.job_title}</Text>
        <Text style={styles.location}>{item?.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard