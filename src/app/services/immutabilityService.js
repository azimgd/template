import update from 'immutability-helper';
import * as constants from 'constants/index';

update.extend('$setRequestActionSuccess', (data = {}, original) => update(original, {
  message: { $set: data.message },
  status: { $set: constants.STATUS_SUCCESS },
  isLoading: { $set: false },
  createdAt: { $set: Date.now() },
}));

update.extend('$setRequestActionFailure', (data = {}, original) => update(original, {
  message: { $set: data.message },
  status: { $set: constants.STATUS_FAILURE },
  isLoading: { $set: false },
  createdAt: { $set: Date.now() },
}));

update.extend('$setRequestActionIdle', (data = {}, original) => update(original, {
  message: { $set: null },
  status: { $set: constants.STATUS_IDLE },
  isLoading: { $set: false },
  createdAt: { $set: Date.now() },
  ...data,
}));

update.extend('$setRequestActionLoading', (data = {}, original) => update(original, {
  message: { $set: null },
  status: { $set: constants.STATUS_LOADING },
  isLoading: { $set: true },
  createdAt: { $set: Date.now() },
  ...data,
}));
