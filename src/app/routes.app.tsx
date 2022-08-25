import {PublicPath, PrivatePath} from 'react-auth-navigation'

const SamplePage = () => <div>SAMPLE PAGE</div>

const publicPaths: PublicPath = [
  {
    name: 'Root',
    path: '/',
    component: SamplePage,
    restricted: true
  }
]

const privatePaths: PrivatePath = []

export {publicPaths, privatePaths}
