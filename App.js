import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet, Alert, SafeAreaView, Platform,} from 'react-native';

const App =() => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View>
      <SafeAreaView style={[styles.container, ContainerStyle]}>
        <Text style={styles.textHome}>مرحبا بكم </Text>
      </SafeAreaView>
      </View>
      <View style={styles.container}>
          <View style={styles.imagesContainer}>
            <View>
              <Image
                source={require("./assets/1.jpg")}
                style={styles.image}
              />
              <Button style={styles.button} title = "الصورة الأولى"
              color="#f194ff"
              onPress={() =>
                Alert.alert ('تم الضغط', 'الرجوع إلى الوراء',[
                  {text: "Yes", onPress: ()=> console.log("Yes")},
                  {Text: "No", onPress: ()=> console.log("No")},
              ])
            }
              />
            </View>
            <View>
              <Image
                source={require("./assets/2.jpg")}
                style={styles.image}
              />
              <Button title = "الصورة الثانية"
              color="#a1abfa"
              onPress={() =>
                Alert.prompt ("تم الضغط", "اضغط", text => console.log(text))
              }
              style={styles.button}
              />
            </View>
          </View>
          <Text style={styles.text}>الباب الأول</Text>
          <Button title="سجل نفسك"
          color="#f194fc"
          onPress={() => alert('تم الضغط')}
          style={styles.button}
          />
          <View style={styles.imagesContante}>
            <View>
              <Image
                source={require("./assets/3.jpg")}
                style={styles.image}
              />
              <Button title = "الصورة الثالثة"
              color="#f194f1"
              onPress={() => alert ('تم الضغط')}
              style={styles.button}
              />
            </View>
            <View>
              <Image
                source={require("./assets/4.jpg")}
                style={styles.image}
              />
              <Button title = "الصورة الثانية"
              color="#f194f9"
              onPress={() => alert ('تم الضغط')}
              style={styles.button}
              />
            </View>
          </View>
      </View>
      </ScrollView>
  );
};
const ContainerStyle={backgroundColor: 'orange'};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaaaca',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },

  text:{
    fontSize: 30,
    marginBottom: 10,
  },
  textHome:{
    flex: 1,
    fontSize: 40,
    color: 'red',
  },
  inerText1: {
    color: 'red',
    fontSize: 30,
  },
  inerText2: {
    color: '#af1c2e',
    fontSize: 40,
  },
  imagesContainer:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginRight: 10,
    paddingTop: 10,
  },
  image:{
    width: 150,
    height: 150,
    marginBottom: 5,
    borderRadius: 30,
    marginBottom: 6,
    minWidth: '45%',
  },
  button:{
    backgroundColor: 'red',
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 4,
    minWidth: '48%',
  },

});

export default App;
