/**
 * Generated Tool: workspacesTool_0157
 * Domain: Workspaces
 * ID: 0157
 */
exports.workspacesTool_0157 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0157:', error);
    throw error;
  }
};
