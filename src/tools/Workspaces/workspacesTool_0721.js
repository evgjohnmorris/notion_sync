/**
 * Generated Tool: workspacesTool_0721
 * Domain: Workspaces
 * ID: 0721
 */
exports.workspacesTool_0721 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0721:', error);
    throw error;
  }
};
