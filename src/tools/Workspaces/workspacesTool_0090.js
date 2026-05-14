/**
 * Generated Tool: workspacesTool_0090
 * Domain: Workspaces
 * ID: 0090
 */
exports.workspacesTool_0090 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0090:', error);
    throw error;
  }
};
