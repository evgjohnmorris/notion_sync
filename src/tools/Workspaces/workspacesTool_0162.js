/**
 * Generated Tool: workspacesTool_0162
 * Domain: Workspaces
 * ID: 0162
 */
exports.workspacesTool_0162 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0162:', error);
    throw error;
  }
};
