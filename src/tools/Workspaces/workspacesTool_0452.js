/**
 * Generated Tool: workspacesTool_0452
 * Domain: Workspaces
 * ID: 0452
 */
exports.workspacesTool_0452 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0452:', error);
    throw error;
  }
};
