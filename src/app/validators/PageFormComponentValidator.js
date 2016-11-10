import yup from 'yup';
import { transformYupValidationErrors } from 'utils/index';

const schema = yup.object().shape({
  title: yup.string().required(),
  categoryId: yup.string().required(),
  subCategoryId: yup.string().required(),
  content: yup.string().required(),
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
