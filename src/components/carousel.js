import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';

export class MyCarousel extends react.Component {

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              sliderWidth={300}
              itemWidth={300}
            />
        );
    }
}