/**
 * Generated Tool: workspacesTool_0790
 * Domain: Workspaces
 * ID: 0790
 */
exports.workspacesTool_0790 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0790:', error);
    throw error;
  }
};
