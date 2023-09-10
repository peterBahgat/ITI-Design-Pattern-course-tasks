// UserDatabase class to encapsulate the database
class UserDatabase {
  constructor() {
    this.users = [
      { username: 'alice', password: 'password123' },
      { username: 'bob', password: 'secret' },
    ];
  }
  findUser(username) {
    return this.users.find((user) => user.username === username);
  }
}

/* The interfaces
      1- Interface for handling incoming requests
      2- Interface for checking credentials with database
      3- Interface for token generation
*/

class RequestHandlerInterface {
  handleRequest(request) {
    throw new Error('Method not implemented');
  }
}

class CredentialCheckerInterface {
  checkCredentials(username, password) {
    throw new Error('Method not implemented');
  }
  generateToken(username) {
    throw new Error('Method not implemented');
  }
}

class TokenGeneratorInterface {
  generateToken(username) {
    throw new Error('Method not implemented');
  }
}

/* the implementations of interfaces
      1- Implementation of token generation
      2- Implementation of CredentialChecker
      3- Implementation of RequestHandler
      4- Authentication class that depends on RequestHandler and CredentialChecker interfaces
*/

class TokenGenerator extends TokenGeneratorInterface {
  generateToken(username) {
    return `jwt.${username}.signature`;
  }
}

class CredentialChecker extends CredentialCheckerInterface {
  constructor(userDatabase, tokenGenerator) {
    super();
    this.userDatabase = userDatabase;
    this.tokenGenerator = tokenGenerator;
  }
  checkCredentials(username, password) {
    const user = this.userDatabase.findUser(username);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }
  generateToken(username) {
    return this.tokenGenerator.generateToken(username);
  }
}

class RequestHandler extends RequestHandlerInterface {
  constructor(credentialChecker) {
    super();
    this.credentialChecker = credentialChecker;
  }
  handleRequest(request) {
    const { username, password } = request;
    if (this.credentialChecker.checkCredentials(username, password)) {
      return this.credentialChecker.generateToken(username);
    }
    throw new Error('Credential error, Please check your email or password !');
  }
}

class Authentication {
  constructor(requestHandler) {
    this.requestHandler = requestHandler;
  }
  authenticate(request) {
    return this.requestHandler.handleRequest(request);
  }
}

// Usage
const userDatabase = new UserDatabase();
const credentialChecker = new CredentialChecker(
  userDatabase,
  new TokenGenerator()
);
const requestHandler = new RequestHandler(credentialChecker);
const authentication = new Authentication(requestHandler);

const token = authentication.authenticate({
  username: 'alice',
  password: 'password123',
});
console.log(token);
