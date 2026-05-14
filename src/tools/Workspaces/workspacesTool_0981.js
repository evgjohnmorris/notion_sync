/**
 * Generated Tool: workspacesTool_0981
 * Domain: Workspaces
 * ID: 0981
 */
exports.workspacesTool_0981 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0981:', error);
    throw error;
  }
};
