/**
 * Generated Tool: workspacesTool_0824
 * Domain: Workspaces
 * ID: 0824
 */
exports.workspacesTool_0824 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0824:', error);
    throw error;
  }
};
