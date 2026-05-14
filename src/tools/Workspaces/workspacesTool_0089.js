/**
 * Generated Tool: workspacesTool_0089
 * Domain: Workspaces
 * ID: 0089
 */
exports.workspacesTool_0089 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0089:', error);
    throw error;
  }
};
