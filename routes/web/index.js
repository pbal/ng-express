import home from './home';
import angular from './angular';

export default (server) => {
    server.use('/home', home);
    server.use('/angular', angular);
};
