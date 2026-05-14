/**
 * Generated Tool: workspacesTool_0433
 * Domain: Workspaces
 * ID: 0433
 */
exports.workspacesTool_0433 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0433:', error);
    throw error;
  }
};
