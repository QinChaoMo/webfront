import Signin from '../layouts/Signin/Signin';
import Auth from '../layouts/Auth/Auth';
// import Dashboard from '../layouts/Dashboard/Dashboard';

const index = [
  {
    key: 'signin',
    path: '/signin',
    component: Signin,
  },
  {
    key: 'home',
    path: '/',
    component: Auth,
  },
];

export default index;
