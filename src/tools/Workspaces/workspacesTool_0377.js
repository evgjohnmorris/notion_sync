/**
 * Generated Tool: workspacesTool_0377
 * Domain: Workspaces
 * ID: 0377
 */
exports.workspacesTool_0377 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0377:', error);
    throw error;
  }
};
