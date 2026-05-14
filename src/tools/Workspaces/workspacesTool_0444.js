/**
 * Generated Tool: workspacesTool_0444
 * Domain: Workspaces
 * ID: 0444
 */
exports.workspacesTool_0444 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0444:', error);
    throw error;
  }
};
