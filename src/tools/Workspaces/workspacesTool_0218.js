/**
 * Generated Tool: workspacesTool_0218
 * Domain: Workspaces
 * ID: 0218
 */
exports.workspacesTool_0218 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0218:', error);
    throw error;
  }
};
