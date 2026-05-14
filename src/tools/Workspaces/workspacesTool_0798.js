/**
 * Generated Tool: workspacesTool_0798
 * Domain: Workspaces
 * ID: 0798
 */
exports.workspacesTool_0798 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0798:', error);
    throw error;
  }
};
