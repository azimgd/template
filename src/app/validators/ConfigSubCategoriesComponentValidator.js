import yup from 'yup';
import { transformYupValidationErrors } from 'utils/index';

const schema = yup.object().shape({
  productSubCategory: yup.string().required(),
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
