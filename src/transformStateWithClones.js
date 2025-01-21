'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  const newState = { ...state };

  for (const action of actions) {
    if (action.type === 'clear') {
      for (const key in newState) {
        delete newState[key];
      }

      const newObj = { ...newState };

      result.push(newObj);
    }

    if (action.type === 'removeProperties') {
      for (let i = 0; i < action.keysToRemove.length; i++) {
        delete newState[action.keysToRemove[i]];
      }

      const newObj = { ...newState };

      result.push(newObj);
    }

    if (action.type === 'addProperties') {
      Object.assign(newState, action.extraData);

      const newObj = { ...newState };

      result.push(newObj);
    }
  }

  return result;
}

module.exports = transformStateWithClones;
