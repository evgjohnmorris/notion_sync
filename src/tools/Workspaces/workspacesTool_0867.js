/**
 * Generated Tool: workspacesTool_0867
 * Domain: Workspaces
 * ID: 0867
 */
exports.workspacesTool_0867 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0867:', error);
    throw error;
  }
};
