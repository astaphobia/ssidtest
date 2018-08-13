import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

import config from './config'

firebase.initializeApp(config)

export const auth = firebase.auth()

const database = firebase.database().ref()
export const dbRef = database.child('catalogues')

let firestore = firebase.firestore()
firestore.settings({timestampsInSnapshots: true})
export const firestoreRef = firestore
