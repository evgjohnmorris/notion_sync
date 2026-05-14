/**
 * Generated Tool: workspacesTool_0252
 * Domain: Workspaces
 * ID: 0252
 */
exports.workspacesTool_0252 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0252:', error);
    throw error;
  }
};
