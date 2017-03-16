import objectAssign from 'object-assign';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state,
        objectAssign({}, action.course)
      ];

    default:
      return state;
  }
}
