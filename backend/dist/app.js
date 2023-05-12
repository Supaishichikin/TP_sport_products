"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 8030;
const app = (0, express_1.default)();
const cors = require('cors');
const corsOptions = { origin: 'http://localhost:3000' };
app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
