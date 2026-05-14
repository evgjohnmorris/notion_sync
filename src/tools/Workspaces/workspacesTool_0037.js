/**
 * Generated Tool: workspacesTool_0037
 * Domain: Workspaces
 * ID: 0037
 */
exports.workspacesTool_0037 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0037:', error);
    throw error;
  }
};
