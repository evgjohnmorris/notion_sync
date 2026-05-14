/**
 * Generated Tool: workspacesTool_0163
 * Domain: Workspaces
 * ID: 0163
 */
exports.workspacesTool_0163 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0163:', error);
    throw error;
  }
};
