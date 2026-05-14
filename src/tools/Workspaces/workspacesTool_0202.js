/**
 * Generated Tool: workspacesTool_0202
 * Domain: Workspaces
 * ID: 0202
 */
exports.workspacesTool_0202 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0202:', error);
    throw error;
  }
};
