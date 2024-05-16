import { View, Text } from "react-native";
import MyStyles from "../../styles/MyStyles";

const Course = () =>{
    return(
        <View style={MyStyles.container}>
            <Text style={MyStyles.subject}>DANH MỤC KHÓA HỌC</Text>
        </View>
    );
}

export default Course;