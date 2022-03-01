// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class SetTime extends Model { }

SetTime.init({
    setTime_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
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
    tableName: 'SetTime',
    timestamps: false
})

// EXPORT
module.exports = SetTime