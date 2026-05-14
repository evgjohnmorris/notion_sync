/**
 * Generated Tool: workspacesTool_0522
 * Domain: Workspaces
 * ID: 0522
 */
exports.workspacesTool_0522 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0522:', error);
    throw error;
  }
};
