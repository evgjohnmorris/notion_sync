/**
 * Generated Tool: workspacesTool_0264
 * Domain: Workspaces
 * ID: 0264
 */
exports.workspacesTool_0264 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0264:', error);
    throw error;
  }
};
