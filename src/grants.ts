export const grants = [
  {
    role: 'user',
    resource: 'User',
    action: 'read:own',
    attributes: '*',
  },
  {
    role: 'user',
    resource: 'User',
    action: 'create:any',
    attributes: '*',
  },
  {
    role: 'user',
    resource: 'User',
    action: 'update:any',
    attributes: '*',
  },
  {
    role: 'user',
    resource: 'User',
    action: 'delete:any',
    attributes: '*',
  },
  {
    role: 'user',
    resource: 'User',
    action: 'read:any',
    attributes: '*',
  },
  {
    role: 'user',
    resource: 'Order',
    action: 'read:own',
    attributes: '*',
  },
];
