import React from 'react';
import ReactDOM from 'react-dom';

import Logic from './Logic';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Logic />, document.getElementById('root'));

serviceWorker.unregister();
