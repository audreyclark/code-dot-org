import _ from 'lodash';
import { LevelStatus } from '@cdo/apps/util/sharedConstants';
import { createStore } from 'redux';
import Immutable from 'immutable';

export const fakeLesson = (name, id, lockable=false) => ({name, id, lockable});

export const fakeLevels = numLevels => _.range(numLevels).map(index => ({
  status: LevelStatus.not_tried,
  url: `/level${index + 1}`,
  name: `Level ${index + 1}`
}));

export const createStoreWithHiddenLesson = (viewAs, lessonId) => {
  return createStore(state => state, {
    stageLock: { viewAs },
    sections: {
      selectedSectionId: '11'
    },
    hiddenStage: Immutable.fromJS({
      bySection: {
        '11': { [lessonId]: true }
      }
    })
  });
};
