import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<div>
			<Header />
			<div className='my-auto min-h-[60vh]'>{children}</div>
			<Footer />
		</div>
	);
}

export default Layout;
