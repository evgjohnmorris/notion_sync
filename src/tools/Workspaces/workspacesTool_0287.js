/**
 * Generated Tool: workspacesTool_0287
 * Domain: Workspaces
 * ID: 0287
 */
exports.workspacesTool_0287 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0287:', error);
    throw error;
  }
};
