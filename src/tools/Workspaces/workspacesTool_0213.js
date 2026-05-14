/**
 * Generated Tool: workspacesTool_0213
 * Domain: Workspaces
 * ID: 0213
 */
exports.workspacesTool_0213 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0213:', error);
    throw error;
  }
};
