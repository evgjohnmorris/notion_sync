/**
 * Generated Tool: workspacesTool_0511
 * Domain: Workspaces
 * ID: 0511
 */
exports.workspacesTool_0511 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0511:', error);
    throw error;
  }
};
