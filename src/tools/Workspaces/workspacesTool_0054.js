/**
 * Generated Tool: workspacesTool_0054
 * Domain: Workspaces
 * ID: 0054
 */
exports.workspacesTool_0054 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0054:', error);
    throw error;
  }
};
