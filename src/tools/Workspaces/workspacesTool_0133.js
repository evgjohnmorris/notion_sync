/**
 * Generated Tool: workspacesTool_0133
 * Domain: Workspaces
 * ID: 0133
 */
exports.workspacesTool_0133 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0133:', error);
    throw error;
  }
};
