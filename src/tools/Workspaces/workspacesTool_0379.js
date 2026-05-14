/**
 * Generated Tool: workspacesTool_0379
 * Domain: Workspaces
 * ID: 0379
 */
exports.workspacesTool_0379 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0379:', error);
    throw error;
  }
};
