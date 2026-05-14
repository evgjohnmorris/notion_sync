/**
 * Generated Tool: workspacesTool_0261
 * Domain: Workspaces
 * ID: 0261
 */
exports.workspacesTool_0261 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0261:', error);
    throw error;
  }
};
