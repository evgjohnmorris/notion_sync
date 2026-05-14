/**
 * Generated Tool: workspacesTool_0119
 * Domain: Workspaces
 * ID: 0119
 */
exports.workspacesTool_0119 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0119:', error);
    throw error;
  }
};
