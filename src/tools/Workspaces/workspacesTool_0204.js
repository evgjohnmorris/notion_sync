/**
 * Generated Tool: workspacesTool_0204
 * Domain: Workspaces
 * ID: 0204
 */
exports.workspacesTool_0204 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0204:', error);
    throw error;
  }
};
