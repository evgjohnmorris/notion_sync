/**
 * Generated Tool: workspacesTool_0476
 * Domain: Workspaces
 * ID: 0476
 */
exports.workspacesTool_0476 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0476:', error);
    throw error;
  }
};
