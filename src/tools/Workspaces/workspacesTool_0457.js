/**
 * Generated Tool: workspacesTool_0457
 * Domain: Workspaces
 * ID: 0457
 */
exports.workspacesTool_0457 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0457:', error);
    throw error;
  }
};
