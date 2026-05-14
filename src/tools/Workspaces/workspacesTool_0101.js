/**
 * Generated Tool: workspacesTool_0101
 * Domain: Workspaces
 * ID: 0101
 */
exports.workspacesTool_0101 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0101:', error);
    throw error;
  }
};
