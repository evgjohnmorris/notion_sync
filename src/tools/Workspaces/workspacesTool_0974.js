/**
 * Generated Tool: workspacesTool_0974
 * Domain: Workspaces
 * ID: 0974
 */
exports.workspacesTool_0974 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0974:', error);
    throw error;
  }
};
