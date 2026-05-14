/**
 * Generated Tool: workspacesTool_0761
 * Domain: Workspaces
 * ID: 0761
 */
exports.workspacesTool_0761 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0761:', error);
    throw error;
  }
};
