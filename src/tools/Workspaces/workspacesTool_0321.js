/**
 * Generated Tool: workspacesTool_0321
 * Domain: Workspaces
 * ID: 0321
 */
exports.workspacesTool_0321 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0321:', error);
    throw error;
  }
};
