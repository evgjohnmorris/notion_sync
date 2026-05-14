/**
 * Generated Tool: workspacesTool_0102
 * Domain: Workspaces
 * ID: 0102
 */
exports.workspacesTool_0102 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0102:', error);
    throw error;
  }
};
