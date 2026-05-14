/**
 * Generated Tool: workspacesTool_0652
 * Domain: Workspaces
 * ID: 0652
 */
exports.workspacesTool_0652 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0652:', error);
    throw error;
  }
};
