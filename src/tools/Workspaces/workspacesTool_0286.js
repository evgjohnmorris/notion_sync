/**
 * Generated Tool: workspacesTool_0286
 * Domain: Workspaces
 * ID: 0286
 */
exports.workspacesTool_0286 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0286:', error);
    throw error;
  }
};
