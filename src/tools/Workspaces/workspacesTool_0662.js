/**
 * Generated Tool: workspacesTool_0662
 * Domain: Workspaces
 * ID: 0662
 */
exports.workspacesTool_0662 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0662:', error);
    throw error;
  }
};
