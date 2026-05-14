/**
 * Generated Tool: workspacesTool_0460
 * Domain: Workspaces
 * ID: 0460
 */
exports.workspacesTool_0460 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0460:', error);
    throw error;
  }
};
