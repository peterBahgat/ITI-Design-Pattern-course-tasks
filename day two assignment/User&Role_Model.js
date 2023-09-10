// Role Model
class Role {
  constructor(name) {
    this.name = name;
  }
}

// User Model
class User {
  constructor(id, roles = []) {
    this.id = id;
    this.roles = roles;
  }

  addRole(role) {
    this.roles.push(role);
  }

  isRoleExist(roleName) {
    return this.roles.some((role) => role.name === roleName);
  }
}

// AuthorizationService Interface
class IAuthorizationService {
  hasRole(user, role) {}
}

// AuthorizationService Implementation
class AuthorizationService extends IAuthorizationService {
  hasRole(user, role) {
    return user.isRoleExist(role);
  }
}

// Create roles
const adminRole = new Role('admin');
const editorRole = new Role('editor');

// Create a user and assign roles
const user = new User(1);
console.log(adminRole);
user.addRole(adminRole);
user.addRole(editorRole);

const authService = new AuthorizationService();

// Usage Example
if (authService.hasRole(user, 'admin')) {
  console.log('User has admin role.');
} else {
  console.log('User does not have admin role.');
}
console.log(user);
