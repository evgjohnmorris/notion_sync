/**
 * Generated Tool: workspacesTool_0291
 * Domain: Workspaces
 * ID: 0291
 */
exports.workspacesTool_0291 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0291:', error);
    throw error;
  }
};
