import { DataTypes } from "sequelize";

const Rates = (sequelize) => {
    return sequelize.define("Rates", {
        date: {
            type: DataTypes.TIME(),
            primaryKey: true,
        },
        currency: {
            type: DataTypes.STRING(3),
            primaryKey: true,
        },
        rate: {
            type: DataTypes.DECIMAL(10, 4),
        },
    }, {
        timestamps: false,
        tableName: "rates",
    });
}

export default Rates;