/**
 * Generated Tool: workspacesTool_0473
 * Domain: Workspaces
 * ID: 0473
 */
exports.workspacesTool_0473 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0473:', error);
    throw error;
  }
};
