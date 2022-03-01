// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class MeetGreet extends Model { }

MeetGreet.init({
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    meet_greet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'MeetGreet',
    timestamps: false
})

// EXPORT
module.exports = MeetGreet