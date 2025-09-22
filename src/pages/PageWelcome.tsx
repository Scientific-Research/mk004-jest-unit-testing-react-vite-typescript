import * as qstr from '../qtools/qstr';

export const PageWelcome = () => {
	return (
		<>
			<p>{qstr.sentencize('welcome to this site')}</p>
		</>
	);
};