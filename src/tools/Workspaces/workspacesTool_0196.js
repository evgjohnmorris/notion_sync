/**
 * Generated Tool: workspacesTool_0196
 * Domain: Workspaces
 * ID: 0196
 */
exports.workspacesTool_0196 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0196:', error);
    throw error;
  }
};
