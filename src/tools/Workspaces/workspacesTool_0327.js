/**
 * Generated Tool: workspacesTool_0327
 * Domain: Workspaces
 * ID: 0327
 */
exports.workspacesTool_0327 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0327:', error);
    throw error;
  }
};
