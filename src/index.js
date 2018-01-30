import React from 'react';

import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


import CommentBox from './CommentBox';

ReactDOM.render(<CommentBox url='http://localhost:3001/api/comments'/>, document.getElementById('root'));
