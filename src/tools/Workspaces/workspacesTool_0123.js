/**
 * Generated Tool: workspacesTool_0123
 * Domain: Workspaces
 * ID: 0123
 */
exports.workspacesTool_0123 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0123:', error);
    throw error;
  }
};
