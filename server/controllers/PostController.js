const {Posts} = require('../models')
const validator = require('fastest-validator');
const V     = new validator();

module.exports = {
    getPosts: async(req, res)=>{
        try {
            const post = await Posts.findAll({
                order:[
                    ['id','asc']
                ]
            });
            res.json(post)
        } catch (error) {
            res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    },
    createPost: async(req, res)=>{
        try {
            const shema = {
                title: "string|allownull:false",
                postText: "string|allownull:false",
                username: "string|allownull:false",
            }
            const validate = V.validate(req.body, shema);
            if(validate.length){
                res.status(400).json({
                    statusCode: 400,
                    message: validate
                })
            }
            const newPost = await Posts.create(req.body);
            res.json(newPost);
        } catch (error) {
            res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }
}