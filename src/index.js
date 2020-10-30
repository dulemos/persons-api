import app from './routes/index.js';


const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})