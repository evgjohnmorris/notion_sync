/**
 * Generated Tool: workspacesTool_0471
 * Domain: Workspaces
 * ID: 0471
 */
exports.workspacesTool_0471 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0471:', error);
    throw error;
  }
};
