/**
 * Generated Tool: workspacesTool_0843
 * Domain: Workspaces
 * ID: 0843
 */
exports.workspacesTool_0843 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0843:', error);
    throw error;
  }
};
