/**
 * Generated Tool: workspacesTool_0224
 * Domain: Workspaces
 * ID: 0224
 */
exports.workspacesTool_0224 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0224:', error);
    throw error;
  }
};
