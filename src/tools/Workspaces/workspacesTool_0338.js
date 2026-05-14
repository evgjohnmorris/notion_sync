/**
 * Generated Tool: workspacesTool_0338
 * Domain: Workspaces
 * ID: 0338
 */
exports.workspacesTool_0338 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0338:', error);
    throw error;
  }
};
