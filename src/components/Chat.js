import React from "react";
import {
    View,
    Text
} from "react-native";

class Chat extends React.Component{
    render(){

        if(this.props.username){
            return(
                <View>
                    <Text>
                        Hello {this.props.username}!!
                    </Text>
                </View>
            );
        }
            return null;
        }
}


export default Chat;