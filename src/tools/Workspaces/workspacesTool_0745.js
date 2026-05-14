/**
 * Generated Tool: workspacesTool_0745
 * Domain: Workspaces
 * ID: 0745
 */
exports.workspacesTool_0745 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0745:', error);
    throw error;
  }
};
