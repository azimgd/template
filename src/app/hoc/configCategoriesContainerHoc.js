import React from 'react';
import { connect } from 'react-hz';
import { transformCategories } from 'utils/index';

const horizonConnect = (ConfigCategoriesContainer) => connect(ConfigCategoriesContainer, {
  mutations: {
    createNewCategory: (hz) => (category) => hz('categories').store(category),
    createNewSubCategory: (hz) => (subCategory) => hz('subCategories').store(subCategory),
  },
  subscriptions: {
    categories: (hz) => hz('categories'),
    subCategories: (hz) => hz('subCategories'),
  },
});

const hocTransforms = (ConfigCategoriesContainer) => (props) => {
  const mappedCategories = transformCategories(props.categories);
  return (
    <ConfigCategoriesContainer
      mappedCategories={mappedCategories}
      {...props}
    />
  );
};

export default (Container) => horizonConnect(hocTransforms(Container));
