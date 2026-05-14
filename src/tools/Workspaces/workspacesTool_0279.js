/**
 * Generated Tool: workspacesTool_0279
 * Domain: Workspaces
 * ID: 0279
 */
exports.workspacesTool_0279 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0279:', error);
    throw error;
  }
};
