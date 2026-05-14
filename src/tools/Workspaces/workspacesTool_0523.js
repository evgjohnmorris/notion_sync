/**
 * Generated Tool: workspacesTool_0523
 * Domain: Workspaces
 * ID: 0523
 */
exports.workspacesTool_0523 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0523:', error);
    throw error;
  }
};
