import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getMovies} from '../redux/actions';
export default function BooksList() {
    const movies = useSelector(state => state.moviesReducer.movies.result);
    console.log(movies)
    const dispatch = useDispatch();
    const fetchMovies = () => dispatch(getMovies());
    useEffect(() => {
      fetchMovies();
    }, []);

    return(
       
        
     <View>
         
     </View>
        
        
    )

   
  }