/**
 * Generated Tool: workspacesTool_0626
 * Domain: Workspaces
 * ID: 0626
 */
exports.workspacesTool_0626 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0626:', error);
    throw error;
  }
};
