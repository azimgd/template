import test from 'ava';
import { filterSubCategories } from 'services/categoriesService';

test('filterSubCategories', (t) => {
  const subCategories = [{
    categoryId: 1,
    name: 'first',
  }, {
    categoryId: 1,
    name: 'second',
  }, {
    categoryId: 3,
    name: 'third',
  }];
  const filtered = filterSubCategories(subCategories, { categoryId: 1 });
  t.is(filtered.length, 2);
});
