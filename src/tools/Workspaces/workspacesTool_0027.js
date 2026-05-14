/**
 * Generated Tool: workspacesTool_0027
 * Domain: Workspaces
 * ID: 0027
 */
exports.workspacesTool_0027 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0027:', error);
    throw error;
  }
};
