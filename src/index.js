import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let postData = [
  { id: 1, message: 'Hello', likesCount: 12 },
  { id: 2, message: 'It"s my first post', likesCount: 16 },
]

  let dialogsData = [
    { id: 1, name: "Kiwi" },
    { id: 2, name: "Polly" },
    { id: 3, name: "Molly" },
    { id: 4, name: "Mark" },
    { id: 5, name: "Andry" },
    { id: 6, name: "Ann" },
  ];

    let messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Wow" },
    { id: 4, message: "Call me!" },
    { id: 5, message: "Ok" },
    { id: 6, message: "Goodbye" },
  ];
ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
