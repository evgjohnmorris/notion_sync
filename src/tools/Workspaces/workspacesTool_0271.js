/**
 * Generated Tool: workspacesTool_0271
 * Domain: Workspaces
 * ID: 0271
 */
exports.workspacesTool_0271 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0271:', error);
    throw error;
  }
};
