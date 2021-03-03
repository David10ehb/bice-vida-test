const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/principal.routes');


module.exports = () => {
    const app = express();
    const port = process.env.PORT || 8000;
    
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());
    
    // LLamado a la Ruta princiapl
    app.use(router);
    
    app.listen(port, () => {
        console.log(`server start port:  ${port}`);
    });
}
