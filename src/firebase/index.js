import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import config from './config'

firebase.initializeApp(config)
const database = firebase.database().ref()
export const auth = firebase.auth()
export const catalogues = database.child('catalogues')