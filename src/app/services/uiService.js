import _ from 'lodash';
import * as constants from 'constants/index';

export const getSucceededNotifications = notifications => _.filter(notifications, notification => notification.status === constants.STATUS_SUCCESS);

export const getFailedNotifications = notifications => _.filter(notifications, notification => notification.status === constants.STATUS_FAILURE);
