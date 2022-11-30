const express = require('express');
const routes = require('./routes');

const app = express();

/**
 * Body Parser
 */
app.use(express.json());

app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));