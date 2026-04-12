import TopBar from './TopBar';
import Navbar from './Navbar';

const Header = () => (
	<header className='fixed top-0 left-0 right-0 z-50'>
		<TopBar />
		<Navbar />
	</header>
);

export default Header;
