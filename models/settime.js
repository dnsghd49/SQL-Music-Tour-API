// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class SetTime extends Model { }

SetTime.init({
    set_time_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    stage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false
})

// EXPORT
module.exports = SetTime