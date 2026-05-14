/**
 * Generated Tool: workspacesTool_0590
 * Domain: Workspaces
 * ID: 0590
 */
exports.workspacesTool_0590 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0590:', error);
    throw error;
  }
};
