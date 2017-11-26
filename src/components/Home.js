import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import {
    Actions
} from "react-native-router-flux";

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }
    }
    render(){
        return(
            <View>
                <Text style={styles.title}>
                    What is your name?
                </Text>
                <TextInput
                    value={this.state.name}
                    onChange={(text) => this.setState({name: text.nativeEvent.text})}
                    underlineColorAndroid='transparent'
                    style={styles.nameInput}
                    placeholder="John Doe"
                >
                </TextInput>
                <TouchableOpacity onPress={() => {
                    Actions.chat({
                        username: this.state.name 
                    })
                }}>
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: '#000',
        margin: 20,
        padding: 5
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    }
})

export default Home;