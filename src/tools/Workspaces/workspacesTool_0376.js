/**
 * Generated Tool: workspacesTool_0376
 * Domain: Workspaces
 * ID: 0376
 */
exports.workspacesTool_0376 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0376:', error);
    throw error;
  }
};
