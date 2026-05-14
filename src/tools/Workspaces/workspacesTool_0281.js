/**
 * Generated Tool: workspacesTool_0281
 * Domain: Workspaces
 * ID: 0281
 */
exports.workspacesTool_0281 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0281:', error);
    throw error;
  }
};
