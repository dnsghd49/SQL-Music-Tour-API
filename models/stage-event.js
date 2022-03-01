// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class StageEvent extends Model { }

StageEvent.init({
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
    modelName: 'StageEvent',
    tableName: 'StageEvent',
    timestamps: false
})

// EXPORT
module.exports = StageEvent