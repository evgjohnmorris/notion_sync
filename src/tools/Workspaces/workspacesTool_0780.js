/**
 * Generated Tool: workspacesTool_0780
 * Domain: Workspaces
 * ID: 0780
 */
exports.workspacesTool_0780 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0780:', error);
    throw error;
  }
};
