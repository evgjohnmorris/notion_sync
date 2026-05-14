/**
 * Generated Tool: workspacesTool_0979
 * Domain: Workspaces
 * ID: 0979
 */
exports.workspacesTool_0979 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0979:', error);
    throw error;
  }
};
