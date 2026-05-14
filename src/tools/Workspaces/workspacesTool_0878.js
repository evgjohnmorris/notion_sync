/**
 * Generated Tool: workspacesTool_0878
 * Domain: Workspaces
 * ID: 0878
 */
exports.workspacesTool_0878 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0878:', error);
    throw error;
  }
};
