/**
 * Generated Tool: workspacesTool_0259
 * Domain: Workspaces
 * ID: 0259
 */
exports.workspacesTool_0259 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0259:', error);
    throw error;
  }
};
