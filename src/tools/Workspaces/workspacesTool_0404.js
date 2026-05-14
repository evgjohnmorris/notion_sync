/**
 * Generated Tool: workspacesTool_0404
 * Domain: Workspaces
 * ID: 0404
 */
exports.workspacesTool_0404 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0404:', error);
    throw error;
  }
};
