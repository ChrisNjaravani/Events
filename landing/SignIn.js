import React from 'react';
import {View, Button, StyleSheet,Text} from 'react-native';

const SignIn = () => {

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.socco}>
                    <Text style={styles.soccoText}>SOCO</Text>
                </View>
            </View>
            <View>
                <Text>sign in</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
    },
    socco:{
        marginTop:'270px',
        alignItems: 'center',

    },
    soccoText:{
        fontSize: '60px',
        color:'black',
        fontWeight: 500,
        fontFamily: 'Gideon Roman',

    }
});
export default SignIn;