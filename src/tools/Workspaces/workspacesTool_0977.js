/**
 * Generated Tool: workspacesTool_0977
 * Domain: Workspaces
 * ID: 0977
 */
exports.workspacesTool_0977 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0977:', error);
    throw error;
  }
};
