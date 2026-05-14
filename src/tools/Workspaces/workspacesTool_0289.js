/**
 * Generated Tool: workspacesTool_0289
 * Domain: Workspaces
 * ID: 0289
 */
exports.workspacesTool_0289 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0289:', error);
    throw error;
  }
};
