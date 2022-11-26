import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import experiences from './experiences';
import skills from './skills';
import pageInfo from './pageInfo';
import socials from './socials';
import projects from './projects';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([skills, pageInfo, experiences, socials, projects]),
});
