import express from 'express'
import path from 'path'

const PORT = process.env.PORT || 3001

const app  = express()

app.use(express.static(path.join(process.cwd(), 'src',  'public') ))

app.get('/' , (req,res) => res.sendFile(path.join(process.cwd(), 'src', 'public', 'views' , 'index.html')))

app.listen(PORT, () => console.log('Client server is running on http://localhost:' + PORT))