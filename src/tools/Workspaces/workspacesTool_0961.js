/**
 * Generated Tool: workspacesTool_0961
 * Domain: Workspaces
 * ID: 0961
 */
exports.workspacesTool_0961 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0961:', error);
    throw error;
  }
};
