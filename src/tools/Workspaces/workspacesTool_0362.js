/**
 * Generated Tool: workspacesTool_0362
 * Domain: Workspaces
 * ID: 0362
 */
exports.workspacesTool_0362 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0362:', error);
    throw error;
  }
};
