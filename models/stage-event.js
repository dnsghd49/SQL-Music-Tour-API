// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Stage_event extends Model { }

Stage_event.init({
    stage_event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stage_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    event_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
}, {
    sequelize,
    modelName: 'Stage_event',
    tableName: 'stage_event',
    timestamps: false
})

// EXPORT
module.exports = Stage_event