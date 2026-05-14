/**
 * Generated Tool: workspacesTool_0962
 * Domain: Workspaces
 * ID: 0962
 */
exports.workspacesTool_0962 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0962:', error);
    throw error;
  }
};
