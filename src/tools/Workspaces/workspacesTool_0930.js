/**
 * Generated Tool: workspacesTool_0930
 * Domain: Workspaces
 * ID: 0930
 */
exports.workspacesTool_0930 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0930:', error);
    throw error;
  }
};
