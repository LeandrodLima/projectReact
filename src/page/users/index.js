import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StatusBar, TouchableOpacity, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import { getAPIUser } from "../../controller/Controller"
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <View style={[[styles.itemCard]]}>
            <Image
                style={styles.Avatar}
                source={{ uri: item.avatar }}
            ></Image>
            <Text style={[styles.title, textColor]}>{item.first_name}</Text>
            <Text style={[styles.title, textColor]}>{item.last_name}</Text>
        </View>
        <View>
            <Text style={[styles.title2, textColor]}>Email:  {item.email}</Text>
        </View>
        {/* <Text style={[styles.title, textColor]}>{item.first_name}</Text> */}
    </TouchableOpacity>
);
const FlatListBasics = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [thisData, setThisData] = useState([]);
    async function getUser() {
        let newData = await getAPIUser()
        setThisData(newData.data)
    }

    useEffect(async () => {
        await getUser()
    }, [])
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
    itemCard:{
        flexDirection: 'row',

    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        marginLeft: 10,
        fontSize: 32,
    },
    title2: {
        marginTop: -50,
        marginLeft: 20,
        width: screen.width,
        textAlign: "center",
        fontSize: 14,
    },
    Avatar: {
        width: 100,
        height: 100,
    },
});