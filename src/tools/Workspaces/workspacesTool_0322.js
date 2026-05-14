/**
 * Generated Tool: workspacesTool_0322
 * Domain: Workspaces
 * ID: 0322
 */
exports.workspacesTool_0322 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0322:', error);
    throw error;
  }
};
