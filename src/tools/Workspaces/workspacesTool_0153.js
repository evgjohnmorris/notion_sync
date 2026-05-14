/**
 * Generated Tool: workspacesTool_0153
 * Domain: Workspaces
 * ID: 0153
 */
exports.workspacesTool_0153 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0153:', error);
    throw error;
  }
};
