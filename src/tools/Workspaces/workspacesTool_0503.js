/**
 * Generated Tool: workspacesTool_0503
 * Domain: Workspaces
 * ID: 0503
 */
exports.workspacesTool_0503 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0503:', error);
    throw error;
  }
};
