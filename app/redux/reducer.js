const initialState = {
  status: ''
}

const connection = function (state = initialState, action) {
  switch (action.type) {
    case 'CONNECT_TO_SERVER':
      return Object.assign({}, state, { status: ''});
    case 'CONNECTED':
      return Object.assign({}, state, { status: 'CONNECTED'});
    case 'DISCONNECTED':
      return Object.assign({}, state, { status: 'DISCONNECT'});

    default:
      return state;
  }
};

export {
  connection
};
