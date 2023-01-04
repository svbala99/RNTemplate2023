// library imports
import Reactotron, { overlay } from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
	// .configure()
	.configure({
		host: '192.168.2.1', // metro server ip
	})
	.useReactNative()
	.use(reactotronRedux())
	.use(sagaPlugin())
	.use(overlay())
	.connect();

Reactotron.clear();

console.tron = Reactotron.log;

export default Reactotron;
