import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

/**
 * Assuming it has array of image objects, function will find an image object by name
 * and update percent attribute of the object. No mutations, only composition
 */
update.extend('$updateImageProgress', (updatedImage, images) => images.map(item =>
  item.name === updatedImage.name ? ({ ...item, ...{ percent: updatedImage.percent } }) : item,
));

/**
 * Assuming it has array of image objects, function will find an image object by name
 * and update percent attribute of the object. No mutations, only composition
 */
update.extend('$failImageProgress', (updatedImage, images) => images.map(item =>
  item.name === updatedImage.name ? ({ ...item, ...{ errorMessage: updatedImage.errorMessage, percent: -1 } }) : item,
));

/**
 * Assuming it has array of image objects, function will find an image object by name
 * and update percent attribute of the object. No mutations, only composition
 */
update.extend('$completeImageProgress', (updatedImage, images) => images.map(item =>
  item.name === updatedImage.name ? ({ ...item, ...{ publicUrl: updatedImage.publicUrl, filename: updatedImage.filename, percent: 100 } }) : item,
));

const initialState = {
  images: {
    data: [],
  },
};

const startImageUpload = (state, action) => update(state, {
  images: {
    data: { $push: [action.payload] },
  },
});

const progressImageUpload = (state, action) => update(state, {
  images: {
    data: { $updateImageProgress: action.payload },
  },
});

const errorImageUpload = (state, action) => update(state, {
  images: {
    data: { $failImageProgress: action.payload },
  },
});

const finishImageUpload = (state, action) => update(state, {
  images: {
    data: { $completeImageProgress: action.payload },
  },
});

export default handleActions({
  [constants.START_IMAGE_UPLOAD]: startImageUpload,
  [constants.PROGRESS_IMAGE_UPLOAD]: progressImageUpload,
  [constants.ERROR_IMAGE_UPLOAD]: errorImageUpload,
  [constants.FINISH_IMAGE_UPLOAD]: finishImageUpload,
}, initialState);
