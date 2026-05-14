/**
 * Generated Tool: workspacesTool_0368
 * Domain: Workspaces
 * ID: 0368
 */
exports.workspacesTool_0368 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0368:', error);
    throw error;
  }
};
