const express = require('express');

const app = express();

const {getPost} = require('../controller/postController')

const router = express.Router()

router.get("/",getPost);

module.exports={router};