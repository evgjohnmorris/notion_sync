/**
 * Generated Tool: workspacesTool_0709
 * Domain: Workspaces
 * ID: 0709
 */
exports.workspacesTool_0709 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0709:', error);
    throw error;
  }
};
