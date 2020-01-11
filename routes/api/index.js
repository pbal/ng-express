import character from './character';

export default (server) => {
    server.use('/api/character', character);
};
