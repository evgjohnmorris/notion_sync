/**
 * Generated Tool: workspacesTool_0194
 * Domain: Workspaces
 * ID: 0194
 */
exports.workspacesTool_0194 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0194:', error);
    throw error;
  }
};
