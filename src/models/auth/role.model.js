import { DataTypes, Model } from 'sequelize';
import { v7 as uuidv7 } from 'uuid';

import sequelize from '../../config/db.config.js';

class Role extends Model {}
Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: () => uuidv7(),
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [3, 50],
                notEmpty: true,
            },
        },
        slug: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                isLowercase: true,
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                min: 1,
            },
        },
        color: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        icon: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        isSystem: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Role',
        tableName: 'roles',
        timestamps: true,
        paranoid: true,
        underscored: true,
        indexes: [
            {
                unique: true,
                fields: ['uuid'],
            },
            {
                unique: true,
                fields: ['name'],
            },
            {
                unique: true,
                fields: ['slug'],
            },
            {
                fields: ['priority'],
            },
            {
                fields: ['is_active'],
            },
        ],
    },
);

export default Role;
