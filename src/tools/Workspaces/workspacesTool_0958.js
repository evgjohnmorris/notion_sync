/**
 * Generated Tool: workspacesTool_0958
 * Domain: Workspaces
 * ID: 0958
 */
exports.workspacesTool_0958 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0958:', error);
    throw error;
  }
};
