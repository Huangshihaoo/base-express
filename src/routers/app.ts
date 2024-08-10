import express from 'express'

const router = express.Router();
router.get("/", (req, res) => {

    res.send("维基主页");
});

router.get('/about', (req, res) => {
    res.send('about')
})

export default {
    path: '/',
    router
}