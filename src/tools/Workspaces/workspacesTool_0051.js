/**
 * Generated Tool: workspacesTool_0051
 * Domain: Workspaces
 * ID: 0051
 */
exports.workspacesTool_0051 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0051:', error);
    throw error;
  }
};
