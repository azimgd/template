import yup from 'yup';
import { transformYupValidationErrors } from 'utils/index';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  title: yup.string().required(),
  category: yup.string().required(),
  subCategory: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
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
