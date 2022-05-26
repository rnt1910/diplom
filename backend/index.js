require('dotenv').config()
const colors = require('colors')
const express = require('express')
const app = express()
const cors = require('cors')
const sequelize = require('./db')
const router = require('./routes')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(
	cors({
		credentials: true,
		origin: '*',
	})
)
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () =>
			console.log(`Server started on port: ${PORT}`.bgGreen.black)
		)
	} catch (error) {
		console.log(`${error.message}`.bgRed.black)
	}
}

start()
