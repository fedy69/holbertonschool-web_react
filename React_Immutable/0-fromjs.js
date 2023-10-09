import Immutable from 'immutable';

function getImmutableObject(obj) {
  return Immutable.fromJS(obj);
}

export default getImmutableObject;
