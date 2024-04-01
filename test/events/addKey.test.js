const { addPublicKey } = require('../../events/addKey');
const sshService = require('../../services/ssh');

jest.mock("../../services/ssh", () => ({
  connection: jest.fn()
}));

describe('addPublicKey', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it('should call connection function with the correct command', async () => {
    const message = {
      content: "/add <some_key>"
    };

    process.env.SSH_EXEC_ADD_CMD = "some_command";

    await addPublicKey(message);

    expect(sshService.connection).toHaveBeenCalledWith("some_command","<some_key>");
  });
});
