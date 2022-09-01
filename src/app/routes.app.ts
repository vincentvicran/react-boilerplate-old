import {PublicPath, PrivatePath} from 'react-auth-navigation'

import {Sample} from 'src/pages/sample'

const publicPaths: PublicPath = [
  {
    name: 'Root',
    path: '/',
    component: Sample,
    restricted: true
  }
]

const privatePaths: PrivatePath = []

export {publicPaths, privatePaths}
