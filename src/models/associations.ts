import Role from '@/models/auth/role.model.js';
import User from '@/models/auth/user.model.js';

Role.hasMany(User, {
    foreignKey: 'roleId',
    as: 'users',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
});

User.belongsTo(Role, {
    foreignKey: 'roleId',
    as: 'role',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
});
