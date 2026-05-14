/**
 * Generated Tool: workspacesTool_0313
 * Domain: Workspaces
 * ID: 0313
 */
exports.workspacesTool_0313 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0313:', error);
    throw error;
  }
};
