export const grants = [
  {
    role: 'admin',
    resource: 'User',
    action: 'read:own',
    attributes: '*',
  },
  {
    role: 'admin',
    resource: 'User',
    action: 'create:any',
    attributes: '*',
  },
  {
    role: 'admin',
    resource: 'User',
    action: 'update:any',
    attributes: '*',
  },
];
