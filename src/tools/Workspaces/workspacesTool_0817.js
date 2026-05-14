/**
 * Generated Tool: workspacesTool_0817
 * Domain: Workspaces
 * ID: 0817
 */
exports.workspacesTool_0817 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0817:', error);
    throw error;
  }
};
