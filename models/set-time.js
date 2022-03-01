// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class SetTime extends Model { }

SetTime.init({
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stage_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    set_time_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'SetTime',
    timestamps: false
})

// EXPORT
module.exports = SetTime