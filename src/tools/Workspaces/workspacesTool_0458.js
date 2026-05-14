/**
 * Generated Tool: workspacesTool_0458
 * Domain: Workspaces
 * ID: 0458
 */
exports.workspacesTool_0458 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0458:', error);
    throw error;
  }
};
