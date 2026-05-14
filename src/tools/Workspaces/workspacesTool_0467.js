/**
 * Generated Tool: workspacesTool_0467
 * Domain: Workspaces
 * ID: 0467
 */
exports.workspacesTool_0467 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0467:', error);
    throw error;
  }
};
