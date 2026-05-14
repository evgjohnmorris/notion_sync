/**
 * Generated Tool: workspacesTool_0820
 * Domain: Workspaces
 * ID: 0820
 */
exports.workspacesTool_0820 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0820:', error);
    throw error;
  }
};
