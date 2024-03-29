import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LogIn } from '../api/logintry'

export default function login({ navigation }) {

    //função de navegação
    function navigateToSingup() {
        navigation.navigate('Signup');
    }


    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    //conteudo da pagina
    return <LinearGradient style={{flex:1}} colors={['#ffffff', 'hsla(207, 55%, 62%, 0.2)', 'hsla(207, 55%, 62%, 0.4)']} >
        <View style={styles.headerStyle}>
            <Image style={styles.logoStyle} source={require('./img/logo.png')} />
            <Text style={styles.textStyle}>PiuPiuwer</Text>
        </View>
        <View>
            <View style={styles.formArea}>
                <Text style={styles.containerText} >Usuário:</Text>
                <TextInput style={styles.containerText} placeholder="Digite seu usuário"
                value={user} onChangeText={user => setUser(user)} />
                {/* <Text>{user}</Text> */}
            </View>

            <View style={styles.formArea}>
                <Text style={styles.containerText}>Senha:</Text>
                <TextInput secureTextEntry={true} style={styles.containerText} placeholder="Digite sua senha"
                value={senha} onChangeText={senha => setSenha(senha)}
                autoCapitalize='none' autoCorrect={false}/>
                {/* <Text>{senha}</Text> */}
            </View>
        </View>
        <View>
            <TouchableOpacity style={styles.loginButton}  onPress={() => { LogIn(user, senha, {navigation}) }}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.signupText} onPress={navigateToSingup}>Ainda não é um Piuwer? Cadastre-se agora</Text>
            {/* <Button title="Entrar" onPress={() => console.log('feed')} /> */}
        </View>
    </LinearGradient>
};

const styles = StyleSheet.create({
    headerStyle: {
        height: 50,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        margin: 20,
    },

    logoStyle: {
        height: 40,
        width: 50,
        resizeMode: 'cover',

    },

    textStyle: {
        fontSize: 30,
        color: 'hsla(207, 60%, 44%, 0.85)',
    },

    formArea: {
        marginBottom: 10,
        marginLeft: 20
    },
    containerText: {
        fontSize: 25,
    },
    loginButton: {
        margin: 10,
        backgroundColor: 'hsla(207, 60%, 44%, 0.85)',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 130,
        borderRadius: 50
    },
    loginText: {
        color: 'white',
        fontSize: 20,
    },
    signupText: {
        textDecorationLine: 'underline',
        color: '#1a9ad1',
        padding: 3,
        textAlign: "center",
        fontSize: 15,
    }

})
