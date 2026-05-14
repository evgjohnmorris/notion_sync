/**
 * Generated Tool: workspacesTool_0589
 * Domain: Workspaces
 * ID: 0589
 */
exports.workspacesTool_0589 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0589:', error);
    throw error;
  }
};
