/**
 * Generated Tool: workspacesTool_0030
 * Domain: Workspaces
 * ID: 0030
 */
exports.workspacesTool_0030 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0030:', error);
    throw error;
  }
};
