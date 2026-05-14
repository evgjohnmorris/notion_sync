/**
 * Generated Tool: workspacesTool_0947
 * Domain: Workspaces
 * ID: 0947
 */
exports.workspacesTool_0947 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0947:', error);
    throw error;
  }
};
