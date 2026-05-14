/**
 * Generated Tool: workspacesTool_0851
 * Domain: Workspaces
 * ID: 0851
 */
exports.workspacesTool_0851 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0851:', error);
    throw error;
  }
};
