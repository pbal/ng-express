import express from 'express';

const router = express.Router();

router.get('/', async (req, res, next) => {
    res.render('home', {title: 'Home' });
});

export default router;
