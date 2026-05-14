/**
 * Generated Tool: workspacesTool_0863
 * Domain: Workspaces
 * ID: 0863
 */
exports.workspacesTool_0863 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0863:', error);
    throw error;
  }
};
