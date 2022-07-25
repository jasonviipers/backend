import { AccessControlModule, RolesBuilder } from 'nest-access-control';
import { grants } from 'src/grants';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ACLModule = AccessControlModule.forRoles(new RolesBuilder(grants));
