import express from 'express';
import bodyParser from 'body-parser';
import * as PersonsController from '../controllers/PersonsController.js'

const app = express();
const router = express.Router();

const { json } = bodyParser;

router.use(json());

router.get('/ping', (req, res) => {
    res.status(201).send({
        "ping": true
    })
})

router.get('/persons', (req, res) => {
    PersonsController.apiGetAll(req, res)
})

router.get('/persons/:id', (req, res) => {
    PersonsController.apiGetById(req, res)
})

router.post('/persons', (req, res) => {
    PersonsController.apiSave(req, res)
})

router.put('/persons/:id', (req, res) => {
    PersonsController.apiUpdate(req, res)
})

router.delete('/persons/:id', (req, res) => {
    PersonsController.apiDelete(req, res)
})

app.use('/', router);

export default app
