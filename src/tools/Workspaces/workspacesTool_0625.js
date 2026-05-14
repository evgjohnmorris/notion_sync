/**
 * Generated Tool: workspacesTool_0625
 * Domain: Workspaces
 * ID: 0625
 */
exports.workspacesTool_0625 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0625:', error);
    throw error;
  }
};
