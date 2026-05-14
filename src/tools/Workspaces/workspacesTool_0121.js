/**
 * Generated Tool: workspacesTool_0121
 * Domain: Workspaces
 * ID: 0121
 */
exports.workspacesTool_0121 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0121:', error);
    throw error;
  }
};
