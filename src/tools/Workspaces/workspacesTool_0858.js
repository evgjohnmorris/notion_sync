/**
 * Generated Tool: workspacesTool_0858
 * Domain: Workspaces
 * ID: 0858
 */
exports.workspacesTool_0858 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0858:', error);
    throw error;
  }
};
