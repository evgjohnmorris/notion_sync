/**
 * Generated Tool: workspacesTool_0762
 * Domain: Workspaces
 * ID: 0762
 */
exports.workspacesTool_0762 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0762:', error);
    throw error;
  }
};
