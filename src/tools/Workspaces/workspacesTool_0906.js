/**
 * Generated Tool: workspacesTool_0906
 * Domain: Workspaces
 * ID: 0906
 */
exports.workspacesTool_0906 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0906:', error);
    throw error;
  }
};
