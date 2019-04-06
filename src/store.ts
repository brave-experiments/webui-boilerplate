/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

// Redux API
import { createStore } from 'redux'

// Feature core reducer
import rootReducer from './reducers'

export default createStore(rootReducer)
