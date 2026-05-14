/**
 * Generated Tool: workspacesTool_0339
 * Domain: Workspaces
 * ID: 0339
 */
exports.workspacesTool_0339 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0339:', error);
    throw error;
  }
};
