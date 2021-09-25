import { useSelector } from 'react-redux';
import {
  RouteProps as DefaultRouteProps,
  Redirect,
  Route,
} from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import { RootReducerState } from '../type';

const DefaultRoute = ({ component: Component, ...rest }: DefaultRouteProps) => {
  const isAuth = useSelector((state: RootReducerState) => state.auth.isAuth);

  if (!Component) return null;

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};

export default DefaultRoute;
