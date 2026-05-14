/**
 * Generated Tool: workspacesTool_0008
 * Domain: Workspaces
 * ID: 0008
 */
exports.workspacesTool_0008 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0008:', error);
    throw error;
  }
};
