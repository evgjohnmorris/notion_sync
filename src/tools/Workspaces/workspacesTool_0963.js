/**
 * Generated Tool: workspacesTool_0963
 * Domain: Workspaces
 * ID: 0963
 */
exports.workspacesTool_0963 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0963:', error);
    throw error;
  }
};
