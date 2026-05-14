/**
 * Generated Tool: workspacesTool_0882
 * Domain: Workspaces
 * ID: 0882
 */
exports.workspacesTool_0882 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0882:', error);
    throw error;
  }
};
