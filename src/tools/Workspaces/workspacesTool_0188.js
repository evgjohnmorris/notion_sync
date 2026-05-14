/**
 * Generated Tool: workspacesTool_0188
 * Domain: Workspaces
 * ID: 0188
 */
exports.workspacesTool_0188 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0188:', error);
    throw error;
  }
};
