import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { colors } from '../constants/colors'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/Logo.png')} />
      <Text style={styles.title}>
        Dieta
        <Text style={{ color: colors.green }}>.AI</Text>
      </Text>
      <Text style={styles.text}>Sua Dieta personalizada com inteligência artifical</Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    width: 240,
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    backgroundColor: colors.blue,
    width: '100%',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
