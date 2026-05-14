/**
 * Generated Tool: workspacesTool_0083
 * Domain: Workspaces
 * ID: 0083
 */
exports.workspacesTool_0083 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0083:', error);
    throw error;
  }
};
