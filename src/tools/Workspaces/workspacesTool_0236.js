/**
 * Generated Tool: workspacesTool_0236
 * Domain: Workspaces
 * ID: 0236
 */
exports.workspacesTool_0236 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0236:', error);
    throw error;
  }
};
