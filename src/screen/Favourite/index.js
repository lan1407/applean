import React, {useEffect, useState} from 'react';
import FavouriteScreenView from './view';
import {firebase} from '../../../config';

export default function FavouriteScreen() {
  const [name, setName] = useState('');

  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log('User dose not exist');
        }
      });
  }, []);
  return <FavouriteScreenView firebase={firebase} name={name} />;
}
