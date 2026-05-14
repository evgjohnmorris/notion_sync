/**
 * Generated Tool: workspacesTool_0836
 * Domain: Workspaces
 * ID: 0836
 */
exports.workspacesTool_0836 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0836:', error);
    throw error;
  }
};
