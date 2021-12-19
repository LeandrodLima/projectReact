import React from 'react';

function ButtonPerso(props) {
    const {caption} = props;
    return (
        <TouchableOpacity style={
            styles.submitBtn
        }>
          <Text style={
                styles.submitText
            }>{caption}</Text>
        </TouchableOpacity>
    );
}

export default ButtonPerso
