const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

app.get('/', (req,res) => {
	res.send('server data dummy 004');
});


//connect to database
mongoose.connect('mongodb+srv://sitijs:admin24@cluster0.l556o.mongodb.net/Data004?retryWrites=true&w=majority',{
	useNewUrlParser:true, 
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
},
	 () => 
 console.log('connected to DB!')
);

//middleware
app.use(express.json());


//route middlewares
app.use('/api/user', authRoute);






app.listen(3000,() => console.log('Server Up and Running'));