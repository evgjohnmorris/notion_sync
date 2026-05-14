/**
 * Generated Tool: workspacesTool_0383
 * Domain: Workspaces
 * ID: 0383
 */
exports.workspacesTool_0383 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0383:', error);
    throw error;
  }
};
