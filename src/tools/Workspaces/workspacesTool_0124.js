/**
 * Generated Tool: workspacesTool_0124
 * Domain: Workspaces
 * ID: 0124
 */
exports.workspacesTool_0124 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0124:', error);
    throw error;
  }
};
