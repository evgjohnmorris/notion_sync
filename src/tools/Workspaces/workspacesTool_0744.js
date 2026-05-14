/**
 * Generated Tool: workspacesTool_0744
 * Domain: Workspaces
 * ID: 0744
 */
exports.workspacesTool_0744 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0744:', error);
    throw error;
  }
};
