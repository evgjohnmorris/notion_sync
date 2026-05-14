/**
 * Generated Tool: workspacesTool_0198
 * Domain: Workspaces
 * ID: 0198
 */
exports.workspacesTool_0198 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0198:', error);
    throw error;
  }
};
