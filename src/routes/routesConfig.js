import People from '@containers/PeoplePage/People.jsx';
import HomePage from '@containers/HomePage/HomePage.jsx';
import NotFound from '@containers/NotFoundPage/NotFound';
import PersonPage from '@containers/PersonPage/PersonPage.jsx';
import FavouritePage from '@containers/FavouritePage/FavouritePage';
import SearchPage from '@containers/SearchPage/SearchPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';

const routesConfig = [
	{
		path: '/',
		exact: true,
		component: <HomePage />,
	},
	{
		path: 'people',
		component: <People />,
	},
	{
		path: 'people/:id',
		exact: true,
		component: <PersonPage />,
	},
	{
		path: 'not-found',
		exact: true,
		component: <NotFound />,
	},
	{
		path: '*',
		exact: false,
		component: <NotFound />,
	},
	{
		path: 'favorites',
		exact: true,
		component: <FavouritePage />,
	},
	{
		path: 'search',
		exact: true,
		component: <SearchPage />,
	},
	{
		path: 'fail',
		exact: true,
		component: <ErrorMessage />,
	},
];

export default routesConfig;
