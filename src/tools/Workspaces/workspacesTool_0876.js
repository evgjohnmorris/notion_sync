/**
 * Generated Tool: workspacesTool_0876
 * Domain: Workspaces
 * ID: 0876
 */
exports.workspacesTool_0876 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0876:', error);
    throw error;
  }
};
