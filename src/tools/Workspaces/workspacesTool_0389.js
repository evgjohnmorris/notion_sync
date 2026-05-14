/**
 * Generated Tool: workspacesTool_0389
 * Domain: Workspaces
 * ID: 0389
 */
exports.workspacesTool_0389 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0389:', error);
    throw error;
  }
};
