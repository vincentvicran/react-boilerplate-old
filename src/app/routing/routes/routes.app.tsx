import {RouteObject, createBrowserRouter} from 'react-router-dom'

import {Login, Sample} from 'src/app/pages'
import {CompWrapper} from 'src/app/common'

import {
  ProtectedAuth,
  PublicAuth,
  PublicAccessibleAuth
} from './ProtectedRoutes.app'

export const Router: RouteObject[] = [
  {
    element: <PublicAuth />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Login />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  // {
  //   element: <PublicAccessibleAuth />,
  //   children: [
  //     {
  //       path: '/privacy-policy',
  //       element: <PrivacyPolicyPage />
  //     },
  //   ]
  // },

  {
    path: '/sample',

    element: <ProtectedAuth />,
    children: [
      {
        path: '',
        element: <Sample />
      }
    ]
  },

  {
    path: '*',
    element: (
      <CompWrapper>
        <div>Not found</div>
      </CompWrapper>
    )
  },
  {
    path: '/denied',
    element: (
      <CompWrapper>
        <div>denied</div>
      </CompWrapper>
    )
  }
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Sample />
  },
  {
    path: '/sample',
    element: <Sample />
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  }
])
