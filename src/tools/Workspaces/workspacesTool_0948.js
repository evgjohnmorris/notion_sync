/**
 * Generated Tool: workspacesTool_0948
 * Domain: Workspaces
 * ID: 0948
 */
exports.workspacesTool_0948 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0948:', error);
    throw error;
  }
};
