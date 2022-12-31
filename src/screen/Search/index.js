import React, {useEffect, useState} from 'react';
import SearchScreenView from './view';
import {firebase} from '../../../config';

export default function SearchScreen() {
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
  return <SearchScreenView firebase={firebase} name={name} />;
}
