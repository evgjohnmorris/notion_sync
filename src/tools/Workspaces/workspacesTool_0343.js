/**
 * Generated Tool: workspacesTool_0343
 * Domain: Workspaces
 * ID: 0343
 */
exports.workspacesTool_0343 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0343:', error);
    throw error;
  }
};
