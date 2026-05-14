/**
 * Generated Tool: workspacesTool_0231
 * Domain: Workspaces
 * ID: 0231
 */
exports.workspacesTool_0231 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0231:', error);
    throw error;
  }
};
