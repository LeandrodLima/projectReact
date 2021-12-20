import React, { useState }from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import { getAPI } from "../../controller/countriesController"


const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.name}</Text>
        <Text style={[styles.title2, textColor]}> N.º Fronteiras:  {item.nF}</Text>
    </TouchableOpacity>
);
const FlatListBasics = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [thisData, setThisData] = useState([]);
    async function keyboardDidShow() {
        let aux = await getAPI()
        let newData=[]
        function sortByAge(arr) {
            arr.sort((a, b) => b.nF - a.nF);
            return arr
          }
        var doubles = await aux.map(function(value) {
            let res = {"name":value.name,"nF":value.fronteiras.length}
            newData.push(res)
            return  res
          });
        const sortedByAge = sortByAge(newData)
        setThisData(newData)
    }
    keyboardDidShow()
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.name)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        );
      };

    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          data={thisData}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          extraData={selectedId}
        />
      </SafeAreaView>
    //     <View style={styles.container}>
    //         <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    //             <Text style={[styles.title, textColor]}>{item.name}</Text>
    //         </TouchableOpacity>
    //         {/* <FlatList
    //     data={thisData}
    //     renderItem={({item}) =><Card><Text style={styles.item}>{item.name}</Text></Card>}
    //   /> */}
    //     </View>

    );
}

export default FlatListBasics;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    title2: {
        fontSize: 20,
      },
  });