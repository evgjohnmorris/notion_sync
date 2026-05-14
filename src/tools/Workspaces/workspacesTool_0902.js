/**
 * Generated Tool: workspacesTool_0902
 * Domain: Workspaces
 * ID: 0902
 */
exports.workspacesTool_0902 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0902:', error);
    throw error;
  }
};
