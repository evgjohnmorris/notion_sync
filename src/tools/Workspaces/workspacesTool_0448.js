/**
 * Generated Tool: workspacesTool_0448
 * Domain: Workspaces
 * ID: 0448
 */
exports.workspacesTool_0448 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0448:', error);
    throw error;
  }
};
