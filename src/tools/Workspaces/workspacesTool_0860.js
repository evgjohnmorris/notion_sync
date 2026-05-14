/**
 * Generated Tool: workspacesTool_0860
 * Domain: Workspaces
 * ID: 0860
 */
exports.workspacesTool_0860 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0860:', error);
    throw error;
  }
};
