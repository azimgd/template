import yup from 'yup';
import { transformYupValidationErrors } from 'utils/index';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  productTitle: yup.string().required(),
  productCategory: yup.string().required(),
  productSubCategory: yup.string().required(),
  productDescription: yup.string().required(),
  productPrice: yup.string().required(),
});

const asyncValidate = values => schema.validate(values, {
  abortEarly: false,
})
.then(() => true)
.catch(res => { console.log(transformYupValidationErrors(res), res, 'ser'); throw transformYupValidationErrors(res); });

export default {
  asyncBlurFields: [],
  asyncValidate,
};
