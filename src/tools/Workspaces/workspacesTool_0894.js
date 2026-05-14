/**
 * Generated Tool: workspacesTool_0894
 * Domain: Workspaces
 * ID: 0894
 */
exports.workspacesTool_0894 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0894:', error);
    throw error;
  }
};
