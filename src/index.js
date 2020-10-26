import app from './routes/index.js';


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})