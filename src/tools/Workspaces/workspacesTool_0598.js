/**
 * Generated Tool: workspacesTool_0598
 * Domain: Workspaces
 * ID: 0598
 */
exports.workspacesTool_0598 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0598:', error);
    throw error;
  }
};
