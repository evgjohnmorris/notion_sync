/**
 * Generated Tool: workspacesTool_0156
 * Domain: Workspaces
 * ID: 0156
 */
exports.workspacesTool_0156 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0156:', error);
    throw error;
  }
};
