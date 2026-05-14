/**
 * Generated Tool: workspacesTool_0787
 * Domain: Workspaces
 * ID: 0787
 */
exports.workspacesTool_0787 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0787:', error);
    throw error;
  }
};
