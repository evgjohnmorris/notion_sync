/**
 * Generated Tool: workspacesTool_0829
 * Domain: Workspaces
 * ID: 0829
 */
exports.workspacesTool_0829 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0829:', error);
    throw error;
  }
};
