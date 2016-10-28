import yup from 'yup';
import { transformYupValidationErrors } from 'utils/index';

const schema = yup.object().shape({
  pageTitle: yup.string().required(),
  pageCategory: yup.string().required(),
  pageSubCategory: yup.string().required(),
  pageDescription: yup.string().required(),
});

const asyncValidate = values => schema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch(res => { throw transformYupValidationErrors(res); });

export default {
  asyncBlurFields: [],
  asyncValidate,
};
