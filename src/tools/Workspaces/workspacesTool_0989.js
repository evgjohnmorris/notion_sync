/**
 * Generated Tool: workspacesTool_0989
 * Domain: Workspaces
 * ID: 0989
 */
exports.workspacesTool_0989 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0989:', error);
    throw error;
  }
};
