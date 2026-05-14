/**
 * Generated Tool: workspacesTool_0481
 * Domain: Workspaces
 * ID: 0481
 */
exports.workspacesTool_0481 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0481:', error);
    throw error;
  }
};
