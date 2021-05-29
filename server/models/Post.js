module.exports = (Sequelize, Datatypes)=>{
   const Posts =  Sequelize.define('Posts', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        postText: {
            type: Datatypes.STRING,
            allowNull: false
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false
        }
    })
    return Posts;
}