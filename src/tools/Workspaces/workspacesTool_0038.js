/**
 * Generated Tool: workspacesTool_0038
 * Domain: Workspaces
 * ID: 0038
 */
exports.workspacesTool_0038 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0038:', error);
    throw error;
  }
};
