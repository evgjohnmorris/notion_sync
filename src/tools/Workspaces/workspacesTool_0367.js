/**
 * Generated Tool: workspacesTool_0367
 * Domain: Workspaces
 * ID: 0367
 */
exports.workspacesTool_0367 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0367:', error);
    throw error;
  }
};
