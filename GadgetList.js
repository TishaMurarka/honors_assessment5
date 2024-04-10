import React, { useState, useEffect } from 'react'; // Importing React, useState, and useEffect hooks from React library
import { View, Text } from 'react-native'; // Importing View and Text components from React Native library
import axios from 'axios'; // Importing Axios for making API requests

const GadgetList = () => { // Defining a functional component called MobileList
  const [gadgets, setMobiles] = useState([]); // Initializing state variable 'mobiles' as an empty array using useState hook

  useEffect(() => { // Using useEffect hook to perform side effects (like data fetching) in functional components
    axios.get('https://sanvibhelkar/gadgets')
      .then(response => { // Handling successful response
        setMobiles(response.data); // Updating the 'mobiles' state with the fetched data
      })
      .catch(error => { // Handling errors
        console.error('Error fetching mobile data:', error); // Logging the error to the console
      });
  }, []); // The empty dependency array ensures that this effect runs only once after the component mounts

  return (
    <View> {/* Rendering a View component */}
      {mobiles.map(gadget => ( // Mapping through the 'mobiles' array and rendering a Text component for each mobile
        <Text key={gadget.id}>{gadget.name}</Text> // Displaying the name of each mobile
      ))}
    </View>
  );
}

export default GadgetList; // Exporting the MobileList component as default