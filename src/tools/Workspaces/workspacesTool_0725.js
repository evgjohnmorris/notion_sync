/**
 * Generated Tool: workspacesTool_0725
 * Domain: Workspaces
 * ID: 0725
 */
exports.workspacesTool_0725 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0725:', error);
    throw error;
  }
};
