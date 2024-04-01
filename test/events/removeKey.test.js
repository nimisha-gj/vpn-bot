const { removePublicKey } = require('../../events/removeKey');
const sshService = require('../../services/ssh');

jest.mock("../../services/ssh", () => ({
  connection: jest.fn()
}));

describe('removePublicKey', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it('should call connection function with the correct command and key', async () => {
    const message = {
      content: "/remove <some_key>"
    };

    process.env.SSH_EXEC_DEL_CMD = "some_delete_command";

    await removePublicKey(message);

    expect(sshService.connection).toHaveBeenCalledWith("some_delete_command", "<some_key>");
  });
});
