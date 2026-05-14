/**
 * Generated Tool: workspacesTool_0012
 * Domain: Workspaces
 * ID: 0012
 */
exports.workspacesTool_0012 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0012:', error);
    throw error;
  }
};
