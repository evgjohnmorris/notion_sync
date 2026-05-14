/**
 * Generated Tool: workspacesTool_0336
 * Domain: Workspaces
 * ID: 0336
 */
exports.workspacesTool_0336 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0336:', error);
    throw error;
  }
};
