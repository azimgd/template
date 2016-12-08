import update from 'immutability-helper';
import * as constants from 'constants/index';

update.extend('$setRequestActionSuccess', (data, original) => update(original, {
  message: { $set: data.message },
  status: { $set: constants.STATUS_SUCCESS },
  createdAt: { $set: Date.now() },
}));

update.extend('$setRequestActionFailure', (data, original) => update(original, {
  message: { $set: data.message },
  status: { $set: constants.STATUS_FAILURE },
  createdAt: { $set: Date.now() },
}));

update.extend('$setRequestActionIdle', (loading, original) => update(original, {
  message: { $set: null },
  status: { $set: constants.STATUS_IDLE },
  createdAt: { $set: Date.now() },
}));

update.extend('$setRequestActionLoading', (loading, original) => update(original, {
  message: { $set: null },
  status: { $set: constants.STATUS_LOADING },
  createdAt: { $set: Date.now() },
}));
