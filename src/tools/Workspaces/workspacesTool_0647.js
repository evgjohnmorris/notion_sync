/**
 * Generated Tool: workspacesTool_0647
 * Domain: Workspaces
 * ID: 0647
 */
exports.workspacesTool_0647 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0647:', error);
    throw error;
  }
};
