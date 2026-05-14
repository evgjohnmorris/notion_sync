/**
 * Generated Tool: workspacesTool_0296
 * Domain: Workspaces
 * ID: 0296
 */
exports.workspacesTool_0296 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0296:', error);
    throw error;
  }
};
