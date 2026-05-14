/**
 * Generated Tool: workspacesTool_0149
 * Domain: Workspaces
 * ID: 0149
 */
exports.workspacesTool_0149 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0149:', error);
    throw error;
  }
};
