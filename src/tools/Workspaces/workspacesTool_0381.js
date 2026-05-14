/**
 * Generated Tool: workspacesTool_0381
 * Domain: Workspaces
 * ID: 0381
 */
exports.workspacesTool_0381 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0381:', error);
    throw error;
  }
};
