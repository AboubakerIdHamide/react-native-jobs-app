import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from "../../../../utils";
import { images } from '../../../../constants'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job, handleNavigate}) => {
  const imageSrc=checkImageURL(job?.employer_logo)? {uri:job.employer_logo} : images.company;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={imageSrc}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{job?.job_title}</Text>
        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard