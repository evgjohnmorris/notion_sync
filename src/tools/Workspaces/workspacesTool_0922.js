/**
 * Generated Tool: workspacesTool_0922
 * Domain: Workspaces
 * ID: 0922
 */
exports.workspacesTool_0922 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0922:', error);
    throw error;
  }
};
